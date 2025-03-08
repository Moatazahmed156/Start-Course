import { Link } from "react-router-dom";

function Course({ logo, groups }) {
  return (
    <div className="course border border-white gap-8 rounded-xl p-8 bg-white grow flex flex-col items-center w-[30%] min-w-[200px] drop-shadow-[0_35px_35px_rgba(360,360,360,0.8)]">
      <img src={logo} alt="Course Logo" />
      <div className="groups w-full flex flex-col justify-center items-center">
        {groups.map((group, index) => (
          <Link
            to={`/scoreboard/${group.group}`}
            key={index}
            className="border border-gray m-2 p-2 w-[80%] rounded rounded-2xl flex justify-center"
          >
            <p>Group {group.group}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Course;
