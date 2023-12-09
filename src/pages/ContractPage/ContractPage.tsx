import React from "react";
import { useParams } from "react-router";

export default function ContractPage() {
  const { id } = useParams();

  const dummy = {
    name: "DayDream Land",
    address: "0xaldsjnadsasdasdsad",
    description:
      "While experts agree that the future of NFTs won't resemble the bull run of 2021, some speak about the potential revival of the market in 2024. This positive outlook stems from utility and value-driven projects, creative collaborations, and demand for real world applications.",
    metadata: {
      schema: [
        {
          name: "Unlock Unix",
          type: "number",
        },
      ],
    },
    imageUrl:
      "https://www.itsliquid.com/wp-content/uploads/2022/01/thenewfuture_nftworld_16.jpg",
  };

  return (
    <div className="p-page py-[16vh] flex justify-between items-center w-full">
      <img src={dummy.imageUrl} alt={dummy.name} className="w-[45%]" />
      <div className="flex flex-col">
        <div className="text-[5.5rem] tracking-wide font-semibold">
          {dummy.name}
        </div>
        <div className="text-primary ">Address: {dummy.address}</div>
      </div>
    </div>
  );
}
