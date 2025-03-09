import CPPTicket from "../assets/cpp-ticket-981a7b5b.png";
import CTicket from "../assets/c-ticket-95420b0e.png";
import PYTicket from "../assets/python-ticket-a3446594.png";
import PSTicket from "../assets/ps-ticket-b750758c.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ScoreBoard() {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Score, setScore] = useState([]);
  const { groupName } = useParams();
  const tickets = {
    CPP: CPPTicket,
    C: CTicket,
    Python: PYTicket,
    PS: PSTicket,
  };
  const courseName = {
    CPP: "C++",
    C: "C",
    Python: "Pyhton",
    PS: "PROBLEM SOLVING",
  };
  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.180daraga.com/api/events/startcourse/7-12/persons/${groupName}`
        );
        setBoard(response.data.message);
        setLoading(false);
      } catch (err) {
        console.error("Score Board Error: ", err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (board.length > 0) {
      board.forEach((e, i) => {
        let currentScore = 0;
        const interval = setInterval(() => {
          if (currentScore < e.Score) {
            currentScore++;
            setScore((prev) => {
              const newScores = [...prev];
              newScores[i] = currentScore;
              return newScores;
            });
          } else {
            clearInterval(interval);
          }
        }, 10);
      });
    }
  }, [board]);
  if (loading) return <div className="loader"></div>;

  return (
    <div className="flex flex-col font-bold text-xl  text-white items-center w-[100%] p-8">
      <div className="header flex justify-between border border-2 rounded-2xl p-4 w-[48%] items-center">
        <img src={tickets[groupName.split("-")[0]]} alt="" width="100px" />
        <div className="group text-center uppercase">
          <p>
            {courseName[groupName.split("-")[0]] + " "}
            COURSE
          </p>
          <p>GROUP {groupName}</p>
        </div>
        <img src={tickets[groupName.split("-")[0]]} alt="" width="100px" />
      </div>
      <div className="board w-[48%]">
        {board
          .sort((a, b) => b.Score - a.Score)
          .map((e, i) => (
            <div
              className="flex w-full justify-between border rounded-xl my-4 p-4"
              key={i}
            >
              <p>{e.name}</p>
              <p>{Score[i]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
