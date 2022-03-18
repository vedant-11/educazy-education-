import React from "react";
import Image from "next/image";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";

const Resources = () => {
  return (
    <div className="mt-40 pl-20">
      <h1 className="text-4xl">Resources</h1>
      <p className="text-lg">
        Never stop learning! Books, worksheets and reading materials now just
        one click away.
      </p>
      <div className="flex flex-row w-full justify-start">
        <div className="w-72 my-4 justify-around flex flex-col drop-shadow-2xl transition-all duration-200 hover:-translate-y-2 rounded-sm h-96 bg-bg-primary cursor-pointer">
          {" "}
          <Image src={book1} />{" "}
        </div>
        <div className="w-72 mx-8 my-4 justify-around flex flex-col drop-shadow-2xl transition-all duration-200 hover:-translate-y-2 rounded-sm h-96 bg-bg-primary cursor-pointer">
          <Image src={book2} />
        </div>
        <div className="w-72 my-4 justify-around flex flex-col drop-shadow-2xl transition-all duration-200 hover:-translate-y-2 rounded-sm h-96 bg-bg-primary cursor-pointer">
          <Image src={book3} />
        </div>
      </div>
      <h1 className="text-4xl mt-20">Braille Converter </h1>
      <p className="text-lg">Easily convert text to braille.</p>
      <div className="flex flex-col mb-8">
        <textarea
          placeholder="Type your text here"
          className=" p-4 drop-shadow-2xl bg-bg-primary rounded w-2/3 h-60 "
        />
        <button className="bg-bg-green  mt-8 drop-shadow-2xl rounded-sm h-10 w-72 font-poppins text-white">
          Convert
        </button>
        <textarea
          placeholder="Your braille data"
          className="drop-shadow-2xl p-4 mt-8 bg-bg-primary rounded w-2/3 h-60 "
        />
      </div>
    </div>
  );
};

export default Resources;
