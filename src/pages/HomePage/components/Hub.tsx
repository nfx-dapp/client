const items = [
  {
    icon: "/images/icons/integration.png",
    title: "Effortless Integration",
    description:
      "In NFX, developers seamlessly integrate NFTs. Use advanced data compositions for applications like dashboards, bots, aggregators, and insights trackers.",
  },
  {
    icon: "/images/icons/application.png",
    title: "Innovative Applications",
    description:
      "NFX empowers developers to build innovative applications. Leverage advanced data compositions to create dashboards, bots, aggregators, and insights trackers.",
  },
  {
    icon: "/images/icons/chain-real.png",
    title: "Crafting Onchain Narratives",
    description:
      "Embark on your NFT journey with NFX. From curation to data point validation, effortlessly compose onchain narratives and scale trustless data.",
  },
];

export default function Hub() {
  return (
    <section className="p-page py-[35vh] relative">
      <h1 className="text-center text-4xl leading-relaxed font-raleway font-semibold flex flex-col items-center justify-center gap-y-2 bg-gradient-to-br from-front to-secondary bg-clip-text text-transparent">
        <span className="flex gap-x-2 items-center">
          <img className="h-[0.9em] white" src="/logo.svg" />
          is more than an explorer
        </span>
        <span>it's a hub connecting developers across industries</span>
        <span>to the vast potential of NFT interoperability</span>
      </h1>

      <div className="flex gap-x-12">
        {items.map((item, key) => (
          <div
            key={key}
            className="my-20 flex flex-col items-center text-center gap-y-2 w-[calc(33%_-_1rem)] text-secondary relative"
          >
            <div className="relative">
              <img src={item.icon} alt="" className="h-16 m-4" />
              <div className="bg-secondary absolute-cover mix-blend-color" />
            </div>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <h5 className="text-base">{item.description}</h5>

            <div className="z-10 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl aspect-square h-24 opacity-60 rounded-full bg-gradient-to-br from-primary to-secondary" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 -translate-y-1/2 -scale-y-100 -z-20 left-1/2 -translate-x-1/2 w-full opacity-75">
        <img src="https://powerloom.io/images/investors-bg-p-1600.png" alt="" />
      </div>
    </section>
  );
}
