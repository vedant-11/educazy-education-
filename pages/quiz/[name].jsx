import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getQuestions, getScores, updateTest } from "../../utils/api";
import { parseCookies } from "nookies";
import Router from "next/router";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [marked, setMarked] = useState([]);

  const router = useRouter();
  const { name } = router.query;
  useEffect(() => {
    setMarked([]);
    (async () => {
      const questionData = await getQuestions(name, parseCookies().accessToken);
      setQuestions(questionData.data);
      questionData.data.map((question) =>
        setMarked((old) => [...old, { _id: question._id, option: -1 }])
      );
    })();
  }, []);

  return (
    <div className="m-20 mt-28">
      {questions.length > 0 && (
        <>
          <div className="text-2xl p-8 text-white bg-blue-600">
            {questions[current].statement}
          </div>
          <div className="grid grid-cols-2">
            {console.log(marked)}
            {questions[current].option.map((text, id) => {
              return (
                <p
                  key={id}
                  onClick={() => {
                    marked &&
                      setMarked((old) => {
                        return old.map((checked, curr_id) => {
                          if (curr_id === current)
                            return { ...checked, option: id };
                          else return checked;
                        });
                      });
                  }}
                  className={`p-4  my-2 mx-3 shadow-md cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-200 ${
                    marked && marked[current] && marked[current].option === id
                      ? "bg-bg-green"
                      : "bg-neutral-100"
                  }`}
                >
                  {id + 1}){text}
                </p>
              );
            })}
          </div>
          <div className="flex justify-between mx-3">
            <div>
              <button
                className="bg-blue-600 min-w-[8rem] py-2 mx-2 mt-4 text-white hover:shadow-xl duration-200 transition-all"
                onClick={() => {
                  if (current > 0) setCurrent(current - 1);
                }}
              >
                Prev
              </button>
              <button
                className="bg-blue-600 min-w-[8rem] py-2 mx-2 mt-4 text-white hover:shadow-xl duration-200 transition-all"
                onClick={() => {
                  if (current < questions.length - 1) setCurrent(current + 1);
                }}
              >
                Next
              </button>
            </div>
            <button
              onClick={async () => {
                const res = await getScores(
                  name,
                  marked,
                  parseCookies().accessToken
                );
                if (res.success) {
                  const update = await updateTest(
                    name,
                    { type: 2 },
                    parseCookies().accessToken
                  );
                  update.success && Router.push("/tests");
                }
              }}
              className={`bg-green-600 min-w-[8rem] py-2 mx-2 mt-4 text-white hover:shadow-xl duration-200 transition-all ${
                current == questions.length - 1 ? "block" : "hidden"
              }`}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
