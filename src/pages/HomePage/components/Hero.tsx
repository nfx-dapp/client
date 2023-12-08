import React, { useRef } from "react";

export default function Hero() {
  const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;

  return (
    <section className="h-screen py-[12vh] p-page relative">
      <div className="absolute">
        <video
          src="/videos/home-bg.webm"
          className="rounded-3xl w-full h-full object-cover relative -z-20"
          loop
          autoPlay
          muted
          controls={false}
          ref={videoRef}
          onCanPlay={() => {
            videoRef.current.playbackRate = 1.5;
          }}
        />
        <div className="absolute bg-primary" />
      </div>
    </section>
  );
}
