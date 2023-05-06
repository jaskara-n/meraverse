//SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/ownable.sol";
import "@openzeppelin/contracts/utils/counters.sol";

contract metaverse is ERC721, Ownable {
    constructor() ERC721("META", "MT") {}

    using Counters for Counters.Counter;
}
