import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(job);
  };

  render() {
    const { arrayJobs } = this.props;
    const { showJob } = this.state;
    return (
      <>
        {!showJob === true ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrayJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.props.deleteAjob(item)}> x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   const { arrayJobs } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrayJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
