import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
const Courses = (props) => {
  //   console.log(props.course.course_name);
  // console.log(props.course);

  const { course_name, duration, price, image, key } = props.course;

  const handleDetails = (e) => {
    // console.log(e);

    e.preventDefault();

    return <h1>asdf</h1>;
  };

  return (
    // <div className="col-sm-6 my-3">
    //   <div className="card rounded text-center">
    //     <div className="card-body bg-info">
    //       <h5 className="card-header">{course_name}</h5>
    //       <p className="card-text">Duration: {duration}</p>
    //       <p>Price: {price} Taka</p>
    //       <a href="#" className="btn btn-primary">
    //         See Details Of The Course
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="col-sm-6 my-3">
      <div class="card text-center">
        <img
          class="card-img-top imageHeight"
          src={image}
          alt="Card image cap"
        ></img>
        <div class="card-body bg-dark text-light">
          <h5 className="card-header">{course_name}</h5>
          <p className="card-text">Approximate Consultation Time: {duration}</p>
          <p>Cost: {price} Taka</p>
          {/* <a href="#" className="btn btn-primary">
            See Details Of The Course
          </a> */}
          <Link to={`/details/${key}`}>See Details Of {course_name}</Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
