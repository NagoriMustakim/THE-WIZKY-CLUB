export const contractABI = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "string",
                "name": "_initBaseURI"
            }
        ]
    },
    {
        "type": "error",
        "name": "ApprovalCallerNotOwnerNorApproved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApprovalQueryForNonexistentToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApprovalToCurrentOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ApproveToCaller",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BalanceQueryForZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MintToZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MintZeroQuantity",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnerQueryForNonexistentToken",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferCallerNotOwnerNorApproved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferFromIncorrectOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToNonERC721ReceiverImplementer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TransferToZeroAddress",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "WLAmount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "baseExtension",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "giftMint",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "isWhitelist",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "_merkleProof"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxNft",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxPerMint",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "merkleRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "mintItem",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_count"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintedWL",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "paused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "publicPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "reserved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setBaseExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_newBaseExtension"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setBaseURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_newBaseURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxPerMint",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newMaxPerMint"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMerkleRoot",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_merkleRoot"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPause",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_state"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPublicPrice",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newPublicPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWLAmount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newWLAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWhitelistPrice",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newWhitelistPrice"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistMint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_count"
            },
            {
                "type": "bytes32[]",
                "name": "_merkleProof"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]
