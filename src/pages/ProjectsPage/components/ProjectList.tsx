import { Link } from "react-router-dom";
import { formatEthereumAddress } from "../../../utils";
import projects from "../../../assets/data/projects";

export default function ProjectList() {
  const dummy = projects;

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
                <div className="text-[15px] w-[40%] text-primary">
                  {formatEthereumAddress(item.owner)}
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
