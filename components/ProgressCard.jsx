import Image from "next/image";
import React, { useState } from "react";

const ProgressCard = ({ scores, user }) => {
  return (
    <div className="flex flex-col w-3/6 mx-auto items-center justify-center">
      <h1 className="text-4xl">ProgressCard</h1>
      <h4 className="text-2xl mt-2">One-Portal-One-Report-Card</h4>
      <p className="text-lg max-w-lg text-center mt-6">
        Normalized marks for every student, bringing everyone under the same
        scoring criteria.
      </p>
      <div className="h-[60rem] drop-shadow-2xl bg-slate-100 w-full flex flex-col items-center justify-start mt-32 min-h-[40rem]">
        <div className="flex items-center justify-start w-full ml-32">
          <Image src="/Rectangle 17.png" width={199} height={199}></Image>
          <div className="flex-col">
            <div>UUID: {user._id}</div>
            <div>Name: {user.name}</div>
            <div>Class: {user.class}</div>
            <div>School: {user.school}</div>
          </div>
        </div>
        <h2 className="text-3xl my-16">Normalized Marks</h2>
        <div className="flex w-full justify-evenly flex-wrap">
          {scores.map((score) => (
            <div
              key={score}
              className="bg-blue-600 justify-center w-32 flex items-center rounded-full text-white text-center aspect-square"
            >
              <p>{score.name}</p>
              <p>{score.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
