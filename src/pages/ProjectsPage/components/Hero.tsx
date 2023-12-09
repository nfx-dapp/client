export default function Hero() {
  return (
    <section className="min-h-[30vh] justify-center items-center flex flex-col relative pt-[10vh]">
      <div className="text-5xl font-bold font-inter tracking-wide">
        DISCOVER NFX PROJECTS
      </div>

      <div className="bg-primary bg-opacity-20 py-2 flex justify-between items-center p-page absolute bottom-0 translate-y-full w-full">
        {[...(new Array(10))].map((_, key) => <img
          key={key}
          src="/logo.svg"
          alt="Footer-logo"
          className="h-[1.5vh]  brightness-0 invert opacity-30"
        />)}
      </div>
    </section>
  );
}
