let contracts = [
  {
    name: "Evergarden",
    description:
      "A collection of beautiful digital art pieces inspired by nature.",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    imageUrl: "/images/contracts/evergarden.jpg",
    project: "Heal Me",
    functions: [
      {
        name: { legacy: "getOwner", nfx: "getOwnerNFX" },
        description: "Retrieve the owner of a specific digital art piece.",
        outputs: [
          { name: { legacy: "owner", nfx: "ownerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "tokenUri", nfx: "tokenUriNFX" },
        description: "Get the URI for a specific digital art piece.",
        outputs: [{ name: { legacy: "uri", nfx: "uriNFX" }, type: "string" }],
      },
    ],
  },

  {
    name: "Street View",
    description:
      "An exclusive collection of NFTs representing unique virtual spaces.",
    address: "0x2977bdBbB9F78Ef6D3E8B018ED3bCCEc3E04C0f8",
    imageUrl: "/images/contracts/Street-View.png",
    project: "Blurry View",
    functions: [
      {
        name: { legacy: "getOwner", nfx: "getOwnerNFX" },
        description: "Retrieve the owner of a specific virtual space.",
        outputs: [
          { name: { legacy: "owner", nfx: "ownerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getSpaceName", nfx: "getSpaceNameNFX" },
        description: "Get the name of a specific virtual space.",
        outputs: [
          {
            name: { legacy: "spaceName", nfx: "spaceNameNFX" },
            type: "string",
          },
        ],
      },
    ],
  },
  {
    name: "Foundation Rooms",
    description:
      "An exclusive collection of NFTs representing unique virtual spaces.",
    address: "0x29B018ED3bCCEc377bdBbB9F78Ef6D3E8E04C0f8",
    imageUrl: "/images/contracts/foundation-rooms.webp",
    project: "Blurry View",
    functions: [
      {
        name: { legacy: "getOwner", nfx: "getOwnerNFX" },
        description: "Retrieve the owner of a specific virtual space.",
        outputs: [
          { name: { legacy: "owner", nfx: "ownerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getSpaceName", nfx: "getSpaceNameNFX" },
        description: "Get the name of a specific virtual space.",
        outputs: [
          {
            name: { legacy: "spaceName", nfx: "spaceNameNFX" },
            type: "string",
          },
        ],
      },
    ],
  },
  {
    name: "CareCamp",
    description:
      "Supporting healthcare initiatives through unique and rare NFTs.",
    address: "0x471A42D2E58b5c3E8e57A3e25B08bDCfe03A012B",
    imageUrl: "/images/contracts/care-camp.jpg",
    project: "Heal Me",
    functions: [
      {
        name: { legacy: "getDonor", nfx: "getDonorNFX" },
        description: "Retrieve the donor of a specific healthcare NFT.",
        outputs: [
          { name: { legacy: "donor", nfx: "donorNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getDonationPurpose", nfx: "getDonationPurposeNFX" },
        description: "Get the purpose of the healthcare donation.",
        outputs: [
          { name: { legacy: "purpose", nfx: "purposeNFX" }, type: "string" },
        ],
      },
    ],
  },
  {
    name: "FutureZ",
    description:
      "Exploring futuristic concepts through unique NFT representations.",
    address: "0x8a85c66Dd1eD7ecF4B82Fe6cEeC74b2D999dBDc2",
    imageUrl: "/images/contracts/futureZ.avif",
    project: "Blow Brain",
    functions: [
      {
        name: { legacy: "getCreator", nfx: "getCreatorNFX" },
        description: "Retrieve the creator of a specific futuristic NFT.",
        outputs: [
          { name: { legacy: "creator", nfx: "creatorNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getTheme", nfx: "getThemeNFX" },
        description: "Get the theme of the futuristic NFT.",
        outputs: [
          { name: { legacy: "theme", nfx: "themeNFX" }, type: "string" },
        ],
      },
    ],
  },
  {
    name: "Holy Crest",
    description:
      "NFTs representing historical and mythical crests from diverse cultures.",
    address: "0xD8dA6BF26964Af9D7eEd9e03E53415D37aA96045",
    imageUrl: "/images/contracts/holy-crest.gif",
    project: "Distorted Face",
    functions: [
      {
        name: { legacy: "getOwner", nfx: "getOwnerNFX" },
        description: "Retrieve the owner of a specific historical crest NFT.",
        outputs: [
          { name: { legacy: "owner", nfx: "ownerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getCulture", nfx: "getCultureNFX" },
        description: "Get the cultural origin of the historical crest NFT.",
        outputs: [
          { name: { legacy: "culture", nfx: "cultureNFX" }, type: "string" },
        ],
      },
    ],
  },
  {
    name: "Red Bullzzz",
    description:
      "A dynamic collection of NFTs inspired by the energy and excitement of sports.",
    address: "0x7e3b9b9c161dDD481844C46eB78851B8EbA19Ac7",
    imageUrl: "/images/contracts/redbullzzz.jpg",
    project: "Richie Cat",
    functions: [
      {
        name: { legacy: "getOwner", nfx: "getOwnerNFX" },
        description: "Retrieve the owner of a specific sports-inspired NFT.",
        outputs: [
          { name: { legacy: "owner", nfx: "ownerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getSport", nfx: "getSportNFX" },
        description: "Get the sport associated with the sports-inspired NFT.",
        outputs: [
          { name: { legacy: "sport", nfx: "sportNFX" }, type: "string" },
        ],
      },
    ],
  },
  {
    name: "Digital Odyssey",
    description:
      "A journey through the digital realm with unique NFTs representing virtual landscapes.",
    address: "0xCe67cE6E5CdA31F31Ad01f9d7B9A4cbe4C371d06",
    imageUrl: "/images/contracts/digital-odyssey.avif",
    project: "Glasses Guy",
    functions: [
      {
        name: { legacy: "getExplorer", nfx: "getExplorerNFX" },
        description:
          "Retrieve the explorer of a specific virtual landscape NFT.",
        outputs: [
          { name: { legacy: "explorer", nfx: "explorerNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getLandmark", nfx: "getLandmarkNFX" },
        description: "Get the landmark featured in the virtual landscape NFT.",
        outputs: [
          { name: { legacy: "landmark", nfx: "landmarkNFX" }, type: "string" },
        ],
      },
    ],
  },
  {
    name: "TechArt Chronicles",
    description:
      "NFTs blending technology and art, showcasing futuristic and innovative concepts.",
    address: "0x9f7a3E2f3Ef0FfC5eAAc6B82f87C46E64Ea69F57",
    imageUrl: "/images/contracts/techart.webp",
    project: "Blurry View",
    functions: [
      {
        name: { legacy: "getArtist", nfx: "getArtistNFX" },
        description: "Retrieve the artist of a specific tech-inspired NFT.",
        outputs: [
          { name: { legacy: "artist", nfx: "artistNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getInnovation", nfx: "getInnovationNFX" },
        description:
          "Get the innovative concept featured in the tech-inspired NFT.",
        outputs: [
          {
            name: { legacy: "innovation", nfx: "innovationNFX" },
            type: "string",
          },
        ],
      },
    ],
  },
  {
    name: "CryptoParks",
    description:
      "NFTs representing virtual parks where crypto enthusiasts gather and interact.",
    address: "0xA4fF82383c46D19b9C1c965fEf1bdaA99E82AcC7",
    imageUrl: "/images/contracts/nft-park.png",
    project: "Glasses Guy",
    functions: [
      {
        name: { legacy: "getVisitor", nfx: "getVisitorNFX" },
        description: "Retrieve the visitor of a specific virtual park NFT.",
        outputs: [
          { name: { legacy: "visitor", nfx: "visitorNFX" }, type: "address" },
          {
            name: { legacy: "timestamp", nfx: "timestampNFX" },
            type: "uint256",
          },
        ],
      },
      {
        name: { legacy: "getAttraction", nfx: "getAttractionNFX" },
        description:
          "Get the main attraction featured in the virtual park NFT.",
        outputs: [
          {
            name: { legacy: "attraction", nfx: "attractionNFX" },
            type: "string",
          },
        ],
      },
    ],
  },
];

contracts = contracts.sort((a, b) => a.name.localeCompare(b.name));

export default contracts;
