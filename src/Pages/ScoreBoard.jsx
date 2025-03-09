import CPPTicket from "../assets/cpp-ticket-981a7b5b.png";
import CTicket from "../assets/c-ticket-95420b0e.png";
import PYTicket from "../assets/python-ticket-a3446594.png";
import PSTicket from "../assets/ps-ticket-b750758c.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
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
  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center text-white text-5xl font-bold">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/cover.png')] blur"></div>

        <div className="loader relative animate-pulse">Loading...</div>
      </div>
    );
  if (board.length === 0) {
    return <Navigate to={"*"} replace />;
  }

  return (
    <div className="bg-[url('/cover.png')] relative bg-repeat-y max-md:bg-contain p-6 flex flex-col font-bold text-xl text-white items-center w-full min-h-[105vh] bg-contain bg-repeat-y">
      <div class="absolute inset-0 backdrop-blur-md "></div>

      <div className="flex relative justify-between p-4 w-[48%] items-center border border-2 border-gray-300 rounded-2xl shadow-[0_8px_40px_#8c744a] max-md:w-full">
        <img
          src={tickets[groupName.split("-")[0]]}
          alt=""
          className="w-[100px] max-md:w-[70px]"
        />
        <div className="group text-center uppercase max-md:text-sm">
          <p>
            {courseName[groupName.split("-")[0]] + " "}
            COURSE
          </p>
          <p>GROUP {groupName}</p>
        </div>
        <img
          src={tickets[groupName.split("-")[0]]}
          alt=""
          className="w-[100px] max-md:w-[70px]"
        />
      </div>
      <div className="board relative w-[48%] max-md:w-full">
        {board
          .sort((a, b) => b.Score - a.Score)
          .map((e, i) => (
            <div key={i}>
              <p className="size-8 border border-1 border-[#909b9e] rounded-[60%] shadow-[0_1px_5px_#006499] relative top-[20px] bg-[#8c744a] right-[15px] flex items-center justify-center text-sm">
                {i + 1}
              </p>
              <div
                className="flex w-full font-bold justify-between border border-gray-300 rounded-xl mb-2 p-4 shadow-[0_2px_10px_#8c744a] max-md:text-sm"
                key={i}
              >
                <p>{e.name.split(" ").slice(0, 2).join(" ")}</p>
                <p>{Score[i]}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="goBack">
        <Link
          to={"/"}
          className=" relative text-2xl mt-[50px] border border-gray-300 shadow-[0_2px_10px_#8c744a] rounded text-white font-bold px-4 py-2 hover:bg-[#700608]"
        >
          GoBack
        </Link>
      </div>
    </div>
  );
}

export default ScoreBoard;
