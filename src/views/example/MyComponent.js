import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrayJobs: [
      {
        id: "12312",
        title: "developer",
        salary: "500",
      },
      {
        id: "34324",
        title: "tester",
        salary: "400",
      },
      {
        id: "45343443",
        title: "projectmanager",
        salary: "1000",
      },
    ],
  };

  render() {
    return (
      <>
        <AddComponent />
        <ChildComponent arrayJobs={this.state.arrayJobs} />
      </>
    );
  }
}

export default MyComponent;
