import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

const Details = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alamgir2020/healthcare-assignment-json/main/health.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        // console.log(data);
      });
  }, []);

  // console.log(courses);
  const { id } = useParams();

  let course = {};
  function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      // console.log(array[i][key]);
      // console.log(value);
      if (array[i][key] == value) {
        // return array[i];

        course = array[i];
      }
    }
    return null;
  }
  // var obj = findObjectByKey(courses, "key", id);
  findObjectByKey(courses, "key", id);
  // console.log(course.course_name);
  console.log(course);

  const { course_name, duration, image, price } = course;

  return (
    <div className="container">
      <div className="card my-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{course_name}</h5>
          <p className="card-text">Approximate Consultation Time: {duration}</p>
          <p className="card-text">Cost: {price}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
