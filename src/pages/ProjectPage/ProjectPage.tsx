import { useParams } from "react-router";
import projects from "../../assets/data/projects";
import contracts from "../../assets/data/contracts";

export const ProjectPage = () => {
  const { id } = useParams();

  const dummy = projects.filter((p) => p.name === id)[0];
  const pcontracts = contracts.filter((c) => c.project === id);

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
          {pcontracts.map((contract) => (
            <div className="flex flex-col w-[30%] rounded-lg overflow-hidden gap-y-4 bg-primary bg-opacity-[10%] border-primary border p-2">
              <img
                src={contract.imageUrl}
                alt={contract.name}
                className="h-[50%] object-cover"
              />
              <div className="flex flex-col gap-y-1 px-4">
                <div className="text-2xl border-b border-primary border-opacity-50 pb-1">
                  {contract.name}
                </div>
                <div className="text-sm pt-2">Address: {contract.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
