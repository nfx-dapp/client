import React from "react";
import { useParams } from "react-router";

const dummy1= {
  name: "Evergarden",
  description:
    "It is a groundbreaking web3 project focused on cultivating decentralized ecosystems. Rooted in blockchain technology, it aims to nurture a digital landscape where users can seamlessly grow, trade, and interact with unique virtual assets. ",
  imageUrl:
    "https://img.freepik.com/premium-photo/fantasy-garden-majestic-architectural-building-with-large-stained-glass-windows-arches_743201-1747.jpg",
  contracts: [
    {
      name: "Clean Garden",
      address: "mxasm324k3432nnklanas",
      imageUrl:
        "https://lh4.googleusercontent.com/i90Qyf6AtAzu-418-2DHCxauOgAAmbzhBH5SsgC6cMVVn2lc4StXT0rF4Q_Wb_JqWtPtMgj7L5Akffhoot6KPMhKgl2QDRWMBQMRRqCvAWRo_n1YHj2pLrVVDMgAovy-gOGy4wNwlvRL6ViCJEddD3w",
    },
    {
      name: "Garden Eth",
      address: "nkdsfdsnflr34nknknd dsk3",
      imageUrl:
        "https://jrpysrotkepiwfp7lsqbeocl2tj2ofvod66pugutcijxnaweovxa.arweave.net/TF-JRdNRHosV_1ygEjhL1NOnFq4fvPoakxITdoLEdW4?ext=png",
    },
    {
      name: "Green day",
      address: "ncak332nn2kl3n32",
      imageUrl:
        "https://nftnewspro.com/wp-content/uploads/2023/03/metaverse-will-have-greenhouse-and-garden-filled-with-NFT-flowers-1.jpg",
    },
  ],
};

const dummy = {
  name: "FutureX",
  description:
    "FutureX is a cutting-edge web3 initiative designed to shape the future of decentralized technologies. With a mission to pioneer innovative solutions, FutureX leverages blockchain to build a robust ecosystem for next-gen applications and digital assets. ",
  imageUrl:
    "https://www.motiva.art/wp-content/uploads/2023/02/Superchief-Opens-First-NFT-Art-Gallery-in-New-York-450x300.jpg",
  contracts: [
    {
      name: "Clean Garden",
      address: "mxasm324k3432nnklanas",
      imageUrl:
        "https://brightnode.io/wp-content/uploads/2022/06/NFT-Art-scaled.jpg",
    },
    {
      name: "Garden Eth",
      address: "nkdsfdsnflr34nknknd dsk3",
      imageUrl:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-01/220103-hong-kong-sothebys-immersive-art-nft-ac-556p-692326.jpg",
    },
    {
      name: "Green day",
      address: "ncak332nn2kl3n32",
      imageUrl:
        "https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485",
    },
  ],
};

export const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div className="py-[17vh]">
      <div className="flex gap-x-12 justify-between items-center p-page">
        <img
          src={dummy.imageUrl}
          alt={dummy.name}
          className="w-[45%] rounded-xl p-2 border-primary border shadow-[rgba(85,_231,_148,_0.4)_0px_0px_60px]"
        />
        <div className="flex flex-col text-end">
          <div className="text-[4rem] font-semibold">{dummy.name}</div>
          <div className="mt-2">{dummy.description}</div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center relative">
        <div className="bg-primary py-2 px-16 w-full font-semibold text-[1.5rem] text-center bg-opacity-20 relative z-1 border-t-primary border-b-primary border-b ">
          Contracts
        </div>
        {/* <div className="w-full h-[4vh] top-4 bg-primary border-t border-b border-b-primary border-t-primary -z-1 bg-opacity-40 -mt-8" /> */}
        <div className="mt-12 flex flex-wrap justify-between p-page">
          {dummy.contracts.map((contract) => (
            <div className="flex flex-col w-[30%] rounded-lg overflow-hidden gap-y-4 bg-primary bg-opacity-[10%] border-primary border p-2">
              <img
                src={contract.imageUrl}
                alt={contract.name}
                className="h-[50%] object-cover"
              />
              <div className="flex flex-col gap-y-1 px-4">
                <div className="text-2xl border-b border-primary border-opacity-50 pb-1">{contract.name}</div>
                <div className="text-sm pt-2">Address: {contract.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
