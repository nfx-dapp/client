import { useSearchParams } from "react-router-dom";
import Icon from "../../common/Icon";
import { useEffect, useState } from "react";
import Dropdown from "../../common/Dropdown";
import { formatEthereumAddress } from "../../utils";

const types = ["NFT-contracts", "Projects"];

export default function SearchPage() {
  const dummy = [
    {
      name: "Hara bandr",
      imageUrl:
        "https://www.thestreet.com/.image/t_share/MTgyMDU5NDcwMTc4NzU1NzE1/boredape1.jpg",
      project: "Vo toh me hu",
    },
    {
      name: "safed badar",
      imageUrl:
        "https://www.thestreet.com/.image/t_share/MTgzNTYwNDE0NDE0NTEzMTkw/screen-shot-2021-09-01-at-85022-am.png",
      project: "Vo toh me hu",
    },
    {
      name: "laal bandar",
      imageUrl:
        "https://peerthroughmedia.com/wp-content/uploads/2021/07/APe-270.png",
      project: "Vo toh me hu",
    },
    {
      name: "Hara bandr",
      imageUrl:
        "https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1ad9e12c908d182c891b03abc19988f4",
      project: "Vo toh me hu",
    },
    {
      name: "satrangi bandar",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/62718213cebc45973202159e/Screen-Shot-2022-05-03-at-3-26-59-PM/0x0.png?format=png&width=960",
      project: "Vo toh me hu",
    },
    {
      name: "safed badar",
      imageUrl:
        "https://www.simondickinson.com/wp-content/uploads/2022/03/61e0b084c4b3c.webp",
      project: "Vo toh me hu",
    },
    {
      name: "laal bandar",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:512/1*sBdInW9e1CvR78NksycB2Q.png",
      project: "Vo toh me hu",
    },
    {
      name: "satrangi bandar",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/v8AaxsIiLidtj26Ld_XwdyEJCpo=/155x65:995x648/2000x1333/filters:focal(583x448:584x449)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg",
      project: "Vo toh me hu",
    },
  ];

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
              <div
                key={key}
                className="relative flex flex-row justify-between hover:bg-white hover:bg-opacity-10 rounded-xl hover:cursor-pointer ease-in duration-300 hover:border-opacity-100 border hover:border-primary border-opacity-0 border-white p-[0.2rem] w-[49%] group"
              >
                <div className="flex flex-row gap-x-6">
                  <div className="w-[8vw] h-[12vh] rounded-xl overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 pt-1">
                    <div className="text-xl font-bold font-inter mb-2">
                      {item.name}{" "}
                      <span className="text-xs font-light pl-3 text-secondary">
                        {formatEthereumAddress(
                          "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
                        )}
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
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
