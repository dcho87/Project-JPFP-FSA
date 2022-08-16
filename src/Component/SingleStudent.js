import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleStudent extends Component {
  render() {
    const student = this.props.students.filter(
      (s) => s.id === this.props.match.params.id
    )[0];

    const enrolled = this.props.enrollments.filter(
      (enrollment) => enrollment.studentId === student.id
    )[0]["campusId"];
    const enrolledCampus = this.props.campuses.filter(
      (campus) => campus.id === enrolled
    );

    return (
      <div>
        <h3> Detail page for {student.firstName} </h3>
        <h3>
          {" "}
          {student.firstName} - attends at{" "}
          <Link to={`/campuses/${enrolledCampus[0]["id"]}`}>
            {" "}
            ({enrolledCampus[0]["name"]}){" "}
          </Link>{" "}
        </h3>
        <p />
        <h3>
          Name: {student.firstName} {student.lastName}{" "}
        </h3>
        <h5>Email: {student.email}</h5>
        <img src={student.imageUrl} height="200px" />
        <h5>GPA: {student.gpa}</h5>
      </div>
    );
  }
}

export default connect((state) => state)(SingleStudent);
