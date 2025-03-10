import logo from "../assets/logo-2e33b7a0.png";
import text from "../assets/Start course'24-0dc6d85c.png";
import CLogo from "../assets/c-6f5ff2bb.png";
import CPPLogo from "../assets/cpp-0580f82e.png";
import PYLogo from "../assets/python-da72fccc.png";
import PSLogo from "../assets/ps.png";
import Course from "../Components/Course.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [coursesList, setCoursesList] = useState([
    { name: "CPP", groups: [], logo: CPPLogo },
    { name: "C", groups: [], logo: CLogo },
    { name: "Python", groups: [], logo: PYLogo },
    { name: "PS", groups: [], logo: PSLogo },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.180daraga.com/api/events/startcourse/7-12/groups/"
        );
        const newGroups = response.data.message;

        setCoursesList((prev) =>
          prev.map((course) => ({
            ...course,
            groups: newGroups.filter(
              (e) => e.group?.split("-")[0] === course.name
            ),
          }))
        );
        setLoading(false);
      } catch (err) {
        console.error("Home Error: ", err);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center text-white text-5xl font-bold">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/cover.png')] blur"></div>

        <div className="loader relative z-10 animate-pulse">Loading...</div>
      </div>
    );

  return (
    <div className="bg-[url('/cover.png')] bg-cover relative bg-center bg-cover bg-repeat-y max-md:bg-contain ">
      <div className="absolute inset-0 backdrop-blur-md "></div>
      <div className="header relative flex w-[90%] m-[auto] py-4 items-start justify-center ">
        <img
          src={logo}
          alt="Logo"
          className="size-[110px] max-md:size-[80px]"
        />
        <img
          src={text}
          alt="text"
          className="w-[420px] m-auto relative left-[-52px] max-md:w-[280px] max-md:left-[-40px] "
        />
      </div>
      <div className="courses relative w-[90%] justify-between items-center m-[auto] flex-wrap gap-8 flex pb-8 max-md:flex-col">
        {coursesList.map((e) => (
          <Course logo={e.logo} groups={e.groups} key={e.name} />
        ))}
      </div>
    </div>
  );
}

export default Home;
