export default function Hero() {
  return (
    <section className="min-h-[30vh] justify-center items-center flex flex-col relative pt-[10vh]">
      <div className="text-5xl select-none font-bold font-inter tracking-wide relative after:absolute after:left-0 after:h-[2px] after:translate-y-[2px] after:w-full after:bg-background after:top-1/2 after:z-10">
        DISCOVER NFX PROJECTS
      </div>

      <div className="bg-primary bg-opacity-20 py-2 flex justify-between items-center p-page absolute bottom-0 translate-y-full w-full">
        {[...new Array(10)].map((_, key) => (
          <img
            key={key}
            src="/logo.svg"
            alt="Footer-logo"
            className="h-[1.5vh]  brightness-0 invert opacity-30"
          />
        ))}
      </div>
    </section>
  );
}
