import { affliates } from "@/utils/constants";
import React from "react";

const Affliates = () => {
  return (
    <>
      <section className="md:container text-center mx-auto p-7 font-light">
        <h1 className="md:text-7xl text-xl">International Affiliates</h1>
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 m-2">
        {affliates.map((affliate) => (
          <div
            key={affliate.name}
            className="p-6 bg-[#f6ebe4] aspect-square flex flex-col gap-4 items-center justify-center text-center"
          >
            <h1 className="text-2xl">{affliate.name}</h1>
            <p className="text-base">{affliate.title}</p>
            <span className="text-base">{affliate.location}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Affliates;
