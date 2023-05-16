//displays accounts, total supply, max supply, all objects

import abi from "../artifacts/contracts/metaverse.sol/metaverse.json" assert { type: "json" };
import Web3 from "web3";

const polygon = new Promise((res, rej) => {
  async function meta() {
    if (typeof window.ethereum == "undefined") {
      rej("You should install Metamask");
    }

    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(
      abi.abi,
      "0xb64723B5d46605d6f74F128037B4F87a9C739895"
    );

    let accounts = await web3.eth.requestAccounts(); //array of accounts
    console.log("Connected account:", accounts[0]);

    let totalSupply = await contract.methods
      .totalSupply()
      .call({ from: accounts[0] });
    console.log("Total Supply", totalSupply);
    let maxSupply = await contract.methods
      .maxSupply()
      .call({ from: accounts[0] });
    console.log("Max Supply", maxSupply);

    let objects = await contract.methods
      .getOwnerObjects()
      .call({ from: accounts[0] });
    console.log("Your objects", objects);

    web3.eth.requestAccounts().then((accounts) => {
      contract.methods
        .totalSupply()
        .call({ from: accounts[0] })
        .then((supply) => {
          contract.methods
            .getObjects()
            .call({ from: accounts[0] })
            .then((data) => {
              res({ supply: supply, nft: data });
            });
        });
    });
  }
  meta();
});
export default polygon;
