import CPPTicket from "../assets/cpp-ticket-981a7b5b.png";
import { useEffect, useState } from "react";
import axios from "axios";
function ScoreBoard() {
  const [board, setBoard] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.180daraga.com/api/events/startcourse/7-12/persons/CPP-1"
        );
        const data = response.data.message;
        data.map((e) => {
          setBoard((prev) => [
            ...prev,
            { name: e.name.split(" ").slice(0, 2).join(" "), score: e.Score },
          ]);
        });
      } catch (err) {
        console.error("Score Board Error: ", err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col font-bold text-xl  text-white items-center w-[100%] p-8">
      <div className="header flex justify-between border border-2 rounded-2xl p-4 w-[48%] items-center">
        <img src={CPPTicket} alt="" width="100px" />
        <div className="group">
          <p>C++ COURSE</p>
          <p>GROUP CPP-1</p>
        </div>
        <img src={CPPTicket} alt="" width="100px" />
      </div>
      <div className="board w-[48%]">
        {board
          .sort((a, b) => b.score - a.score)
          .map((e, index) => (
            <div
              className="flex w-full justify-between border rounded-xl my-4 p-4"
              key={index}
            >
              <p>{e.name}</p>
              <p>{e.score}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
