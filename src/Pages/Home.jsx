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

  if (loading) return <div className="loader"></div>;

  return (
    <div>
      <div className="header flex w-[90%] m-[auto] my-4 items-start justify-center">
        <img src={logo} alt="Logo" className="size-[110px]" />
        <img src={text} alt="text" className="w-[300px] m-auto" />
      </div>
      <div className="courses w-[90%] justify-between m-[auto] flex-wrap gap-8 flex pb-8">
        {coursesList.map((e) => (
          <Course logo={e.logo} groups={e.groups} key={e.name} />
        ))}
      </div>
    </div>
  );
}

export default Home;
