import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ students, campuses }) => {
  return (
    <nav class="flex flex-row text-3xl italic hover:not-italic" id="nav">
      <Link to="/students"> Students ({students.length}) </Link>
      <Link to="/campuses"> Campus ({campuses.length})</Link>
    </nav>
  );
};

export default connect((state) => state)(Nav);
