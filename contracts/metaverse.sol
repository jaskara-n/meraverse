//SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract metaverse is ERC721, Ownable {
    constructor() ERC721("META", "MT") {}

    using Counters for Counters.Counter;
    Counters.Counter private supply;

    uint256 public maxSupply = 100;
    uint256 cost = 10 wei;

    //structs

    struct object {
        string name;
        uint256 w;
        uint256 h;
        uint256 d;
        uint256 x;
        uint256 y;
        uint256 z;
    }

    //mappings

    mapping(address => object[]) NFTowners; // every address has an array of objects, ie every address can have multiple nfts

    //arrays

    object[] public objects;

    //functions

    function mint(
        string memory _objectName,
        uint256 _w,
        uint256 _h,
        uint256 _d,
        uint256 _x,
        uint256 _y,
        uint256 _z
    ) public payable {
        require(supply.current() <= maxSupply, "supply exceeds max supply");
        require(msg.value >= cost, "insufficient payment");
        supply.increment();
        _safeMint(msg.sender, supply.current());
        object memory _newObject = object(_objectName, _w, _h, _d, _x, _y, _z);
        objects.push(_newObject);
        NFTowners[msg.sender].push(_newObject);
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    //getter functions

    //returns objects minted only by the caller of the function
    function getOwnerObjects() public view returns (object[] memory) {
        return NFTowners[msg.sender];
    }

    //returns all the objects minted by any user
    function getObjects() public view returns (object[] memory) {
        return objects;
    }

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }
}
