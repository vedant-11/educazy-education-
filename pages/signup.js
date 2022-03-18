import Image from "next/image";
// import abstractImage from "../assets/sc1.png";
import React from "react";
import Signup from "../components/Signup";

const signup = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-full">
      <div className="w-3/5 flex items-center justify-center flex-col entry-image text-center">
        <Image
          src={"/sc 1.png"}
          width={470}
          height={433}
          layout="fixed"
        ></Image>
        <h2 className="text-2xl">
          Providing the foundation for a better tomorrow.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum
          assumenda id incidunt sint quo voluptatem vero? Sint, voluptas maxime.
        </p>
      </div>
      <Signup />
    </div>
  );
};

export default signup;
