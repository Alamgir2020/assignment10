import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import "./Services.css";
const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alamgir2020/healthcare-assignment-json/main/health.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="row mx-5 marginBottom">
      {courses.map((course) => (
        <Courses key={course.key} course={course}></Courses>
      ))}
    </div>
  );
};

export default Services;
