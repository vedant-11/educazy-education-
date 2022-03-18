import { CalendarIcon } from "@chakra-ui/icons";
import { TimeIcon } from "@chakra-ui/icons";
import Router from "next/router";
import React from "react";

const TestCard = ({ id, name, duration, onClick }) => {
  return (
    <div
      className="w-72 my-4 justify-around flex flex-col drop-shadow-2xl transition-all duration-200 hover:-translate-y-2 rounded-sm h-96 bg-bg-primary cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-center text-2xl font-poppins text-blue-500">
        {name && name}
      </h3>
      <p className=" font-poppins text-center">
        Ex cupidatat do aliqua dolore.
      </p>
      <p className="text-center font-poppins">Professor: XYZ</p>
      <p className="text-center font-poppins">
        Maximum Marks: <span className="text-[#FF8A4A]">100</span>
      </p>
      <div className="flex flex-row justify-around">
        <span className="flex justify-center items-center flex-col">
          <TimeIcon w={5} h={5} />
          <p className="text-center">
            {duration &&
              `${duration / 60}:${
                duration % 60 >= 10 ? duration % 60 : "0" + (duration % 60)
              }`}
          </p>
        </span>

        <span className="flex justify-center flex-col items-center">
          <CalendarIcon w={5} h={5} />
          <p className="tet-center">18/03/2022</p>
        </span>
      </div>
    </div>
  );
};

export default TestCard;
