import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { fetchCampuses, fetchStudents, fetchEnrollments } from "../store";
import CampusList from "./CampusList";
import StudentList from "./StudentList";
import CreateCampus from "./CreateCampus";
import Nav from "./Nav";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import CreateStudent from "./CreateStudent";

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Router>
        <div>
          <h1 className="main"> Campuses and Enrollments </h1>
          <Nav />
          <Switch>
            <Route exact path="/" component={CampusList} />
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/students/:id" component={SingleStudent} />
          </Switch>
          <Route exact path="/campuses" component={CreateCampus} />
          <Route exact path="/students" component={CreateStudent} />
        </div>
      </Router>
    );
  }
}

const mapDistpach = (dispatch) => {
  return {
    init: async () => {
      await dispatch(fetchStudents());
      await dispatch(fetchCampuses());
      await dispatch(fetchEnrollments());
    },
  };
};

export default connect((state) => state, mapDistpach)(App);
