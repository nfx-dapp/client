import { Link } from "react-router-dom";

export default function ProjectList() {
  const dummy = [
    {
      name: "Disorted face",
      owner: "3nzxjkszxcf34djfjsdfnk3jedsf",
      imageUrl:
        "https://analyticsindiamag.com/wp-content/uploads/2022/01/NFT-AR_11zon.jpg",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
    {
      name: "Glasses Guy",
      owner: "3nzxjkszxcf343jedsf",
      imageUrl:
        "https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2022-06/shutterstock_2050346153.jpg?h=82f92a78&itok=qcPksB-N",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
    {
      name: "Blurry View",
      owner: "3nzxjkszxcf343jedsf",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/51d98be2e4b05a25fc200cbc/1625169463002-6P2VG9DJQ85XJ2M0QU1C/NFT12.png?format=750w",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
    {
      name: "Blow Brain",
      owner: "3nzxjkszxcf343jedsf",
      imageUrl:
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1651729920.webp",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
    {
      name: "Heal Me",
      owner: "3nzxjkszxcf343jedsf",
      imageUrl:
        "https://static.designboom.com/wp-content/uploads/2022/05/strozzi-nft-db-500.jpg",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
    {
      name: "Richie Cat",
      owner: "3nzxjkszxcf343jedsf",
      imageUrl:
        "https://dxagroup.io/wp-content/uploads/Blog/NFTArtValuationin2023AGuidetoPricing/dxa-group-nft-art-valuation-a-guide-to-pricing-banner-1.webp",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni.",
    },
  ];

  return (
    <section className="p-page pt-[12vh] min-h-screen mt-[3.8vh] mb-[6vh]">
      <div className="flex flex-wrap justify-between gap-y-28">
        {dummy.map((item) => (
          <Link
            to={`/project/${item.name}`}
            className="w-[30%] rounded-xl h-[30vh] flex flex-col items-center relative hover:cursor-pointer p-1 border border-primary group"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="object-cover w-[100%] h-[100%] rounded-xl saturate-[75%] group-hover:saturate-150 duration-300 ease-in"
            />
            <div className="bg-black border border-primary absolute -bottom-12 w-[90%] group-hover:scale-100 duration-300 ease-in scale-90  py-6 rounded-2xl px-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-center justify-between">
                <div className="text-white text-[1.5rem] font-bold">
                  {item.name}
                </div>
                <div className="text-[15px] truncate w-[40%] text-primary">
                  @{item.owner}
                </div>
              </div>
              <div className="truncate">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
