import React from "react";
import { useParams } from "react-router";
import contracts from "../../assets/data/contracts";

export default function ContractPage() {
  const { address } = useParams();

  const dummy = contracts.filter((c) => c.address === address)[0];

  return (
    <div className="py-[16vh] flex flex-col w-full">
      <div className="flex gap-x-12 justify-between items-center p-page">
        <img
          src={dummy.imageUrl}
          alt={dummy.name}
          className="w-[45%] rounded-xl p-2 border-primary border shadow-[rgba(85,_231,_148,_0.4)_0px_0px_30px]"
        />
        <div className="flex flex-col">
          <div className="text-[4rem] tracking-wide font-semibold">
            {dummy.name}
          </div>
          <div className="text-primary border-b-2 border-primary pb-1 ">
            Address: {dummy.address}
          </div>
          <div className="mt-6">{dummy.description}</div>
        </div>
      </div>
      <div
        className="w-[5vw] h-[5vw] bg-primary rounded-full z-1 translate-y-[50%] self-center"
        style={{ clipPath: "polygon(0% 0%, 0% 50%, 100% 50%, 100% 0%)" }}
      />
      <div className="bg-primary w-full flex flex-col items-center">
        <div className="w-[5vw] h-[5vw] bg-back rounded-full -translate-y-[50%]" />
      </div>
      <div className="p-page mt-12 flex flex-col gap-y-2">
        <div className="text-2xl border-b-2 pb-2 mb-8">Functions</div>
        <div className="flex flex-col gap-y-12">
          {dummy.functions.map((functions) => (
            <div className="flex flex-col gap-y-2 bg-white rounded-xl bg-opacity-10 px-6 py-8 hover:bg-opacity-[15%] ease-in duration-300">
              <div>
                Function Name :{" "}
                <span className="text-primary">{functions.name.nfx}</span>
                <div className="text-sm font-extralight mt-2">
                  {functions.description}
                </div>
                <div className="mt-4 mb-2">Output</div>
                <div className="flex flex-row gap-x-8">
                  {functions.outputs.map((output) => (
                    <div className="flex flex-col gap-y-2 bg-opacity-20 rounded-xl bg-primary p-4">
                      <div className="">name: {output.name.nfx}</div>
                      <div>type: {output.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
