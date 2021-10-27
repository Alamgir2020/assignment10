import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // fetch("./courses.json")
    fetch(
      "https://raw.githubusercontent.com/Alamgir2020/healthcare-assignment-json/main/health.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  const slicedArray = courses.slice(0, 4);

  // console.log(slicedArray);

  return (
    <div>
      <Jumbotron></Jumbotron>
      <div className="row mx-5 marginBottom">
        {slicedArray.map((course) => (
          <Courses key={course.key} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Home;
