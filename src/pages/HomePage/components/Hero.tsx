import React, { useRef } from "react";
import DataForm from "../../../common/DataForm";
import Icon from "../../../common/Icon";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;

  const navigate = useNavigate();

  return (
    <section className="h-screen py-[12vh] p-page relative">
      <div className="absolute rounded-3xl overflow-hidden duration-300 group">
        <video
          src="/videos/home-bg.webm"
          className="w-full h-full object-cover relative -z-20 duration-inherit"
          loop
          autoPlay
          muted
          controls={false}
          ref={videoRef}
          onCanPlay={() => {
            videoRef.current.playbackRate = 2;
          }}
        />
        <div className="absolute-cover bg-primary -z-10 mix-blend-color bg-opacity-90 duration-1000" />

        <div className="absolute-cover flex flex-col text-back p-20 font-inter">
          <div className="basis-1/2 flex flex-col justify-end">
            <h1 className="text-9xl tracking-tighter font-semibold">
              EXPLORE NFTS
            </h1>
            <p className="ml-2 text-xl">And interact with them hassle-free</p>
          </div>

          <figure className="border border-back my-14 border-opacity-30" />

          <div className="basis-1/2 flex">
            <div className="basis-1/2">
              <DataForm.Container
                className="flex flex-col py-3 gap-y-2 pr-16"
                onSubmit={(data) => {
                  navigate(`/search?query=${data.query}`);
                }}
              >
                <div className="relative rounded-md overflow-hidden">
                  <DataForm.Input
                    name="query"
                    className="bg-transparent border-back border py-1 px-2 rounded-inherit text-lg placeholder:text-back placeholder:text-opacity-80 placeholder:text-base w-full"
                    placeholder="Enter NFT / Project Name, contract Address to search"
                  />

                  <div className="absolute-cover bg-primary rounded-inherit bg-opacity-50 opacity-40 backdrop-blur-sm animate-pulse pointer-events-none" />

                  <button type="submit">
                    <Icon
                      icon="search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
                    />
                  </button>
                </div>
              </DataForm.Container>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-medium">
                Explore, Understand, and Integrate NFTs Across Applications with
                Ease
              </h2>
              <h3 className="opacity-80 mt-2">
                A tool for developers, by developers
              </h3>

              <div className="flex">
                <Link
                  to="/add-nft"
                  className="bg-background text-front px-8 py-4 mt-5 rounded-full text-sm font-medium tracking-tight overflow-hidden relative after:absolute-cover after:bg-secondary
                after:bg-opacity-0 after:duration-300 hover:after:bg-opacity-20"
                >
                  Support your NFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-light p-1">
        Scroll to explore
      </h5>
    </section>
  );
}
