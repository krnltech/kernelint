import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[336px] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovideo.avifs" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="md:container mx-auto h-full">
        <div className="relative max-w-[800px] h-full flex flex-col justify-center align-items-center text-white px-4 m-auto">
          <h1 className="text-left text-3xl md:text-2xl font-light tracking-wide uppercase">
            Welcome to
          </h1>
          <h2 className="text-center text-5xl md:text-4xlfont-light tracking-wide uppercase">
            KERNEL International Ltd.
          </h2>
          <p className="text-right mt-4 text-base md:text-lg tracking-widest font-light uppercase">
            Consult &nbsp; · &nbsp; Manage &nbsp; · &nbsp; Implement
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
