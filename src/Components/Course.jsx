import { Link } from "react-router-dom";

function Course({ logo, groups }) {
  return (
    <div
      className="course border border-gray-300 gap-8 rounded-xl p-8 bg-[#ffffff00] h-[400px] flex flex-col items-center w-[30%] max-w-[30%] min-w-[350px] text-white font-bold 
    shadow-[0_2px_30px_#8c744a] max-md:min-w-[300px]"
    >
      <img src={logo} alt="Course Logo" />
      <div className="groups w-full flex flex-col mb-10 justify-center uppercase items-center">
        {groups.map((group, index) => (
          <Link
            to={`/scoreboard/${group.group}`}
            key={index}
            className="border border-gray-300 rounded-2xl m-2 p-2 w-[95%] flex justify-center shadow-[0_2px_10px_#8c744a] hover:bg-[#700608]"
          >
            <p>Group {group.group}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Course;
