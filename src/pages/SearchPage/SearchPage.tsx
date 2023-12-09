import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const dummy = [
    {
      name: "Hara bandr",
      imageUrl:
        "https://www.thestreet.com/.image/t_share/MTgyMDU5NDcwMTc4NzU1NzE1/boredape1.jpg",
      owner: "Vo toh me hu",
    },
    {
      name: "safed badar",
      imageUrl:
        "https://www.thestreet.com/.image/t_share/MTgzNTYwNDE0NDE0NTEzMTkw/screen-shot-2021-09-01-at-85022-am.png",
      owner: "Vo toh me hu",
    },
    {
      name: "laal bandar",
      imageUrl:
        "https://peerthroughmedia.com/wp-content/uploads/2021/07/APe-270.png",
      owner: "Vo toh me hu",
    },
    {
      name: "Hara bandr",
      imageUrl:
        "https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1ad9e12c908d182c891b03abc19988f4",
      owner: "Vo toh me hu",
    },
    {
      name: "satrangi bandar",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/62718213cebc45973202159e/Screen-Shot-2022-05-03-at-3-26-59-PM/0x0.png?format=png&width=960",
      owner: "Vo toh me hu",
    },
    {
      name: "safed badar",
      imageUrl:
        "https://www.simondickinson.com/wp-content/uploads/2022/03/61e0b084c4b3c.webp",
      owner: "Vo toh me hu",
    },
    {
      name: "laal bandar",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:512/1*sBdInW9e1CvR78NksycB2Q.png",
      owner: "Vo toh me hu",
    },
    {
      name: "satrangi bandar",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/v8AaxsIiLidtj26Ld_XwdyEJCpo=/155x65:995x648/2000x1333/filters:focal(583x448:584x449)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg",
      owner: "Vo toh me hu",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="p-page py-[15vh] flex flex-col">
      <div className="text-2xl border-b-2 border-b-primary pb-10 w-full border-opacity-[30%] flex items-end gap-x-3">
        Showing results for{" "}
        <input
          defaultValue={searchParams.get("query") || undefined}
          placeholder="Search..."
          className="p-1 bg-transparent outline-none border-b border-b-front text-lg translate-y-[2px] duration-300 focus:border-primary"
          onChange={(event) => {
            setSearchParams((p) => {
              return { ...p, query: event.target.value };
            });
          }}
        />
      </div>
      <div className="flex flex-wrap gap-y-6 mt-12 justify-between">
        {dummy.map((item) => (
          <div className="flex flex-row justify-between hover:bg-white hover:bg-opacity-10 rounded-xl hover:cursor-pointer ease-in duration-200 hover:border-opacity-100 border border-primary border-opacity-0 p-[0.2rem] w-[48%]">
            <div className="flex flex-row gap-x-6">
              <div className="w-[8vw] h-[12vh] rounded-xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="flex flex-col pt-4">
                <div className="text-xl font-bold font-inter">{item.name}</div>
                <div className="text-sm">{item.owner}</div>
              </div>
            </div>
            <img
              src="/images/icons/read_more.svg"
              className="invert w-[4vw] aspect-auto self-center justify-end hover:scale-110 duration-200 ease-in pr-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
