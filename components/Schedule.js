import React from "react";
import { CalendarIcon } from "@chakra-ui/icons";
import { TimeIcon } from "@chakra-ui/icons";

const Schedule = () => {
  return (
    <section className="flex flex-col mt-20 items-center mb-8">
      <h1 className="  text-center font-poppins text-4xl  ">Schedule</h1>
      <p className="text-center mt-4 font-poppins">
        Non veniam voluptate reprehenderit id ut exercitation eu proident
        consequat.
      </p>
      <div className=" mt-16 w-2/3 h-32 rounded-sm bg-bg-gray border-[#E9E8E7] border-2 flex flex-col justify-evenly">
        <div className="flex flex-row">
          {" "}
          <span className="flex flex-row justify-center items-center ml-8">
            <CalendarIcon w={5} h={5} />{" "}
            <p className="font-poppins ml-2 ">5 march 2022</p>
          </span>
          <h6 className="font-poppins text-center ml-40 text-[#5866DE] ">
            Maths Class
          </h6>
        </div>
        <div className="flex flex-row">
          {" "}
          <span className="flex flex-row justify-center items-center ml-8">
            <TimeIcon w={5} h={5} />{" "}
            <p className="font-poppins ml-2 ">5 march 2022</p>
          </span>
          <p className="font-poppins text-left ml-40 ">
            Duis eu nulla exercitation commodo excepteur reprehenderit irure
          </p>
        </div>
      </div>
      <div className=" mt-16 w-2/3 h-32 rounded-sm bg-bg-gray border-[#E9E8E7] border-2 flex flex-col justify-evenly">
        <div className="flex flex-row">
          {" "}
          <span className="flex flex-row justify-center items-center ml-8">
            <CalendarIcon w={5} h={5} />{" "}
            <p className="font-poppins ml-2 ">5 march 2022</p>
          </span>
          <h6 className="font-poppins text-center ml-40 text-[#FF8A4A] ">
            Physics Test
          </h6>
        </div>
        <div className="flex flex-row">
          {" "}
          <span className="flex flex-row justify-center items-center ml-8">
            <TimeIcon w={5} h={5} />{" "}
            <p className="font-poppins ml-2 ">5 march 2022</p>
          </span>
          <p className="font-poppins text-left ml-40 text-[#707070]">
            Duis eu nulla exercitation commodo excepteur reprehenderit irure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
