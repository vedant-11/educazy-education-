import { CheckCircleIcon } from "@chakra-ui/icons";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";
import TestCard from "../components/TestCard";
import { getOneScore, getTest } from "../utils/api";
import Router from "next/router";
const Tests = () => {
  const [allTests, setAllTests] = useState([]);

  useEffect(() => {
    (async () => {
      const tests = await getTest(parseCookies().accessToken);
      setAllTests(tests.data);
    })();
  }, []);

  return (
    <div className="mt-20 max-w-[80%] mx-auto">
      <main className="flex h-full mb-20">
        <div className="w-2/3 px-16 flex  justify-center flex-col">
          <h1 className="font-poppins text-5xl">Tests Portal</h1>
          <p className="font-poppins text-lg mt-2 text-text-para">
            Et ea ullamco quis quis culpa nulla.
          </p>

          <article className="mt-16 py-4">
            <h3 className="font-poppins text-text-heading text-2xl">
              Instructions
            </h3>
            {[...Array(3)].map((_, id) => (
              <span key={id} className="flex flex-row  items-center">
                <CheckCircleIcon color="green.500" />
                <p className="font-poppins ml-2 text-[#6B6B6B]">
                  Do est ex ut elit exercitation labore pariatur.
                </p>
              </span>
            ))}
          </article>
        </div>
        <div className="flex justify-around flex-col">
          <h1 className="text-4xl text-text-heading text-center font-poppins">
            Active test
          </h1>
          {allTests.map(
            (test) =>
              test.type == 0 && (
                <>
                  <TestCard
                    id={test.id}
                    name={test.name}
                    duration={test.duration}
                    onClick={() => Router.push(`/quiz/${test._id}`)}
                  />
                  <button
                    onClick={() => Router.push(`/quiz/${test._id}`)}
                    className="bg-bg-green mt-8 drop-shadow-2xl rounded-sm h-10 w-72 font-poppins text-white"
                  >
                    Give Test
                  </button>
                </>
              ),
          )}
        </div>
      </main>
      <section className="px-16 mb-20">
        <h2 className="text-4xl font-poppins"> Previous Tests </h2>
        <div className="flex items-start">
          {allTests.map(
            (test) =>
              test.type == 2 && (
                <div className="flex flex-row justify-between flex-wrap mr-10">
                  <TestCard
                    id={test._id}
                    name={test.name}
                    duration={test.duration}
                    onClick={async () => {
                      console.log(test._id);
                      const score = await getOneScore(
                        test._id,
                        parseCookies().accessToken,
                      );
                    }}
                  />
                </div>
              ),
          )}
        </div>
      </section>
      <section className="px-16 mb-20">
        <h2 className="text-4xl font-poppins">Upcoming Exams</h2>
        <div className="flex items-start">
          {allTests &&
            allTests.map(
              (test) =>
                test.type == 1 && (
                  <div
                    key={test.id}
                    className="flex flex-row justify-between flex-wrap mr-10"
                  >
                    <TestCard
                      id={test.id}
                      name={test.name}
                      duration={test.duration}
                    />
                  </div>
                ),
            )}
        </div>
      </section>
    </div>
  );
};

export default Tests;
