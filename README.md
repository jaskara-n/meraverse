# About
This is a metaverse on a small scale that is made using three.js,web3.js.
In this metaverse, users can mint a NFT from the frontend itself, and after minting the NFT, the NFT appears on the metaverse in the form of a 3d object.

# Getting started

1. Firstly, clone the repo to your local machine

2. Then, run this command in the command line to install all the dependencies required for the project to run.

    `yarn add`
    
    or if using npm,
    `npm install`
    
3. If you want to redeploy the contract on any other testnet or u want only your own NFTs to show, deploy the contract using 

    `yarn hardhat deploy`
    
    or if using npm,
    `npm hardhat deploy`
    
    make sure to change the address in web3.js, main.js and give the deployed address for the contract.
    
4. Run this command to open it on localhost

   ` yarn vite dev `
   
    or if using npm,
   ` npm vite dev`
   
5. You will see a prompt to commect with metamask, let the connection go through and then give the details for the NFT in the form, the width , height, etc

6. Pay using metamask and then after some time, your NFT will reflect on the metaverse.
    
    
 


