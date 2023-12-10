import { Link, useSearchParams } from "react-router-dom";
import Icon from "../../common/Icon";
import { useEffect, useState } from "react";
import Dropdown from "../../common/Dropdown";
import { formatEthereumAddress } from "../../utils";
import contracts from "../../assets/data/contracts";

const types = ["NFT-contracts", "Projects"];

export default function SearchPage() {
  const dummy = contracts;

  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState<typeof dummy>(dummy);

  useEffect(() => {
    const q = searchParams.get("query") || "";
    const type = searchParams.get("type") || types[0];

    if (!types.includes(type)) {
      searchParams.set("type", types[0]);
      setSearchParams(searchParams);
    }

    const res = dummy.filter((item) => {
      if (
        (item.name + item.project)
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(q.toLowerCase().replaceAll(" ", ""))
      ) {
        return true;
      }
    });

    setFiltered(res);
  }, [searchParams]);

  return (
    <div className="p-page py-[15vh] flex flex-col">
      <div className="text-2xl border-b-2 border-b-primary pb-10 w-full border-opacity-[30%] flex items-end gap-x-3">
        Showing results for{" "}
        <input
          defaultValue={searchParams.get("query") || undefined}
          placeholder="Search..."
          className="p-1 bg-transparent outline-none border-b border-b-front text-lg translate-y-[2px] duration-300 focus:border-primary"
          onChange={(event) => {
            searchParams.set("query", event.target.value);
            setSearchParams(searchParams);
          }}
        />
        in{" "}
        <Dropdown.Container
          className="text-lg pl-2 pr-5 border-front border-b pb-1 translate-y-[2px]"
          onChange={(event) => {
            searchParams.set("type", event.value);
            setSearchParams(searchParams);
          }}
        >
          {types.map((option, key) => (
            <Dropdown.Option key={key} className="text-sm py-2">
              {option}
            </Dropdown.Option>
          ))}
        </Dropdown.Container>
      </div>
      <div className="min-h-[80vh]">
        <div className="flex flex-wrap gap-y-8 justify-between mt-12">
          {filtered.length === 0 ? (
            <span className="text-primary text-center text-lg w-full">
              No Results
            </span>
          ) : (
            filtered.map((item, key) => (
              <Link
                to={`/contracts/${item.address}`}
                key={key}
                className="relative flex flex-row justify-between hover:bg-white hover:bg-opacity-10 rounded-xl hover:cursor-pointer ease-in duration-300 hover:border-opacity-100 border hover:border-primary border-opacity-0 border-white p-[0.2rem] w-[49%] group"
              >
                <div className="flex flex-row gap-x-6">
                  <div className="w-[8vw] h-[12vh] rounded-xl overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover object-center w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 pt-1">
                    <div className="text-xl font-bold font-inter mb-2">
                      {item.name}{" "}
                      <span className="text-xs font-light pl-3 text-secondary">
                        {formatEthereumAddress(item.address)}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-primary">Project :</span>
                      {" " + item.project}
                    </div>
                    <div className="text-sm">
                      <span className="text-primary">Version :</span>
                      {" " + `1.0.0`}
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 text-xl text-primary duration-inherit opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <Icon icon="open_in_new" className="animate-pulse" />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
