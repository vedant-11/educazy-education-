import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import ProgressCard from "../components/ProgressCard";
import { getOneScore, getTest, getUserDetails } from "../utils/api";

const Progress = () => {
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setScores([]);
    setUser([]);
    (async () => {
      const tests = await getTest(parseCookies().accessToken);
      const user = await getUserDetails(parseCookies().accessToken);
      setUser(user.data);
      tests.data.map(async (test) => {
        const score = await getOneScore(test._id, parseCookies().accessToken);
        const newScore = { score: score.score, name: test.name };
        setScores((oldScores) => [...oldScores, newScore]);
      });
    })();
  }, []);

  return (
    <div className="mt-28 m-20">
      <ProgressCard scores={scores} user={user} />
    </div>
  );
};

export default Progress;
