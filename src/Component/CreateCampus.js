import React, { Component } from "react";
import { createCampus } from "../store";
import { connect } from "react-redux";

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.createCampus({ ...this.state });
  }

  render() {
    const { name, address } = this.state;
    const { handleSubmit, handleChange } = this;
    console.log(this.state);
    return (
      /*<div className='createForm'> */
      <div class="flex flex-col text-3xl italic hover:not-italic">
        <form className="createList" onSubmit={handleSubmit}>
          <label>Campus Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label>Campus Address:</label>
          <input name="address" onChange={handleChange} value={address} />
          <p />
          <button type="submit"> Create </button>
        </form>
      </div>
    );
  }
}

const mapDistpach = (dispatch, { history }) => {
  return {
    createCampus: (newCampus) => dispatch(createCampus(newCampus, history)),
  };
};

export default connect(null, mapDistpach)(CreateCampus);
