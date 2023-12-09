import Icon from "./Icon";

export default function Footer() {
  const dummy = [
    {
      title: "Developers",
      items: ["Item1", "Item2 sd", "text dfn", "okay man"],
    },
    {
      title: "More items",
      items: [
        "Item1",
        "Item2 sd",
        "text dfn",
        "okay man",
        "dsjkdn",
        "make snes",
        "i eman thsd's ",
      ],
    },
    {
      title: "Community",
      items: ["Item1", "lorem suing", "text dfn", "okay man", "dskdsf"],
    },
  ];

  const socials = [
    {
      title: "Github",
      link: "https://img.icons8.com/sf-black-filled/64/55e794/github.png",
    },
    {
      title: "X",
      link: "https://img.icons8.com/ios-glyphs/64/55e794/twitterx--v2.png",
    },
    {
      title: "Discord",
      link: "https://img.icons8.com/ios-filled/64/55e794/discord-logo.png",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-back flex justify-center py-10 flex-col p-page">
      <div className="flex flex-col gap-y-3">
        <div className="text-primary text-4xl">Explore NFTs</div>
        <div className="w-[45%] text-sm">
          Streamline NFT integration for developers: an intuitive tool for
          seamless exploration and application integration.
        </div>
      </div>
      <figure className="border-2 border-primary border-opacity-20 my-8" />
      <div className="flex mt-8 justify-between">
        <div className="flex justify-between w-[40%]">
          {dummy.map((category) => (
            <div className="flex flex-col gap-y-4">
              <div>{category.title}</div>
              <div className="opacity-50 flex flex-col gap-y-1">
                {category.items.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] flex flex-col items-end gap-y-6">
          {/* <img src="/logo.svg" className="w-[35%]" /> */}
          <img
            src="/logo.svg"
            alt="Footer-logo"
            className="h-[18vh]  brightness-0 invert opacity-[16%] self-end"
          />
          <div className="flex gap-x-2 w-full justify-end">
            {socials.map((social) => (
              <img
                src={social.link}
                className="rounded-full aspect-square border-primary border-2 w-[9%] p-2 border-opacity-25"
              />
            ))}
          </div>
        </div>
      </div>

      {/* <img
        src="/logo.svg"
        alt="Footer-logo"
        className="h-[35vh]  brightness-0 invert opacity-[16%] self-end"
      /> */}
    </footer>
  );
}
