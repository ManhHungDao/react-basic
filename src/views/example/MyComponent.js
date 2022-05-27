import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrayJobs: [
      {
        id: "12312",
        title: "developer",
        salary: "500$",
      },
      {
        id: "34324",
        title: "tester",
        salary: "400$",
      },
      {
        id: "45343443",
        title: "projectmanager",
        salary: "1000$",
      },
    ],
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input :", this.state);
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent
          name={this.state.firstName}
          age={this.state.lastName}
          arrayJobs={this.state.arrayJobs}
        />
      </>
    );
  }
}

export default MyComponent;
