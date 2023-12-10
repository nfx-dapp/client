let projects = [
  {
    name: "Distorted Face",
    owner: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    imageUrl:
      "https://analyticsindiamag.com/wp-content/uploads/2022/01/NFT-AR_11zon.jpg",
    description:
      "A captivating piece that explores the distortion of facial features, providing a unique and thought-provoking visual experience.",
  },
  {
    name: "Glasses Guy",
    owner: "0x29B018ED3bCCEc377bdBbB9F78Ef6D3E8E04C0f8",
    imageUrl:
      "https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2022-06/shutterstock_2050346153.jpg?h=82f92a78&itok=qcPksB-N",
    description:
      "An artistic representation capturing the essence of a character adorned with distinctive glasses, adding an element of style and character.",
  },
  {
    name: "Blurry View",
    owner: "0x471A42D2E58b5c3E8e57A3e25B08bDCfe03A012B",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/51d98be2e4b05a25fc200cbc/1625169463002-6P2VG9DJQ85XJ2M0QU1C/NFT12.png?format=750w",
    description:
      "A mesmerizing piece that explores the beauty of blurred perspectives, inviting viewers to interpret and find meaning in the abstraction.",
  },
  {
    name: "Blow Brain",
    owner: "0x8a85c66Dd1eD7ecF4B82Fe6cEeC74b2D999dBDc2",
    imageUrl:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1651729920.webp",
    description:
      "An intriguing artwork designed to challenge and stimulate the mind, invoking thoughts and reactions that spark curiosity and contemplation.",
  },
  {
    name: "Heal Me",
    owner: "0xD8dA6BF26964Af9D7eEd9e03E53415D37aA96045",
    imageUrl:
      "https://static.designboom.com/wp-content/uploads/2022/05/strozzi-nft-db-500.jpg",
    description:
      "A therapeutic piece that conveys healing vibes through a harmonious blend of colors and forms, offering solace and comfort to the observer.",
  },
  {
    name: "Richie Cat",
    owner: "0x7e3b9b9c161dDD481844C46eB78851B8EbA19Ac7",
    imageUrl:
      "https://dxagroup.io/wp-content/uploads/Blog/NFTArtValuationin2023AGuidetoPricing/dxa-group-nft-art-valuation-a-guide-to-pricing-banner-1.webp",
    description:
      "A whimsical depiction of Richie Cat, a charming and charismatic feline, bringing joy and playfulness to the world of digital art.",
  },
];

projects = projects.sort((a, b) => a.name.localeCompare(b.name));

export default projects;
