import React, { useEffect } from "react";
import classroom from "../assets/nav1.png";
import test from "../assets/nav2.png";
import progress from "../assets/nav3.png";
import resources from "../assets/nav4.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import alanBtn from "@alan-ai/alan-sdk-web";
const NavBox = () => {
  const router = useRouter();
  const handleClick = () => router.push("/tests");
  // useEffect(() => {
  //   alanBtn({
  //     key: "3593da038e3cc37cebb78cc464bf7a352e956eca572e1d8b807a3e2338fdd0dc/stage",
  //     onCommand: (commandData) => {
  //       if (commandData.command === "Tests") {
  //         handleClick();
  //       }
  //     },
  //   });
  // }, []);
  return (
    <nav className=" flex justify-center mt-20">
      <div className="w-3/4 h-60 bg-white/60 flex justify-evenly items-center drop-shadow-2xl rounded-sm ">
        <div>
          <div className="h-36 w-28 transition ease-in-out hover:-translate-y-1 duration-300 bg-[#EAEAEA] border-2 flex  justify-center items-center hover:scale-110 hover:bg-gradient-to-b from-[#FF3624] to-[#FF8C4A]">
            <div className=" w-16">
              <Image src={classroom} layout="responsive" />
            </div>
          </div>

          <p className="text-center font-poppins mt-2 text-[#525252]  ">
            Join Class
          </p>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="h-36 w-28 transition ease-in-out hover:-translate-y-1 duration-300 bg-[#EAEAEA] border-2 flex  justify-center items-center hover:scale-110 hover:bg-gradient-to-b from-[#FF3624] to-[#FF8C4A]"
          >
            <div className=" w-16">
              <Image src={test} layout="responsive" />
            </div>
          </button>

          <p className="text-center font-poppins mt-2 text-[#525252]  ">
            Tests
          </p>
        </div>
        <div>
          <div
            onClick={() => {
              router.push("progress-card");
            }}
            className="h-36 w-28 transition ease-in-out hover:-translate-y-1 duration-300 bg-[#EAEAEA] border-2 flex  justify-center items-center hover:scale-110 hover:bg-gradient-to-b from-[#FF3624] to-[#FF8C4A]"
          >
            <div className=" w-16">
              <Image src={progress} layout="responsive" />
            </div>
          </div>
          <p className="text-center font-poppins mt-2 text-[#525252]  ">
            Progress Card
          </p>
        </div>
        <div>
          <div
            onClick={() => router.push("/resources")}
            className="h-36 w-28 transition ease-in-out hover:-translate-y-1 duration-300 bg-[#EAEAEA] border-2 flex  justify-center items-center hover:scale-110 hover:bg-gradient-to-b from-[#FF3624] to-[#FF8C4A]"
          >
            <div className=" w-16">
              <Image src={resources} layout="responsive" />
            </div>
          </div>
          <p className="text-center font-poppins mt-2 text-[#525252]  ">
            Resources
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBox;
