import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = (status) => {
    this.setState({
      showJob: !this.state.showJob,
    });
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
                    {item.title} - {item.salary}$
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
