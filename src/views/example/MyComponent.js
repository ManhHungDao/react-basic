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
  addNewJob = (job) => {
    this.setState({
      arrayJobs: [...this.state.arrayJobs, job],
    });
  };
  deleteAjob = (job) => {
    let currentJob = this.state.arrayJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrayJobs: currentJob,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrayJobs={this.state.arrayJobs}
          deleteAjob={this.deleteAjob}
        />
      </>
    );
  }
}

export default MyComponent;
