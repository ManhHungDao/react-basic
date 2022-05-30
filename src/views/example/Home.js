/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { withRouter } from "react-router";
// import Color from "../HOC/color";
import logo from "../../assets/images/download.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.createUserRedux();
  };
  render() {
    const listUsers = this.props.dataRedux;
    console.log("check props redux", this.props.dataRedux); 
    return (
        <>
          <div>Welcome To My Page</div>
          <div>
            <img src={logo} />
          </div>
          <div>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {index + 1} - {item.name}
                      <button onClick={() => this.handleDeleteUser(item)}>
                        Delete
                      </button>
                    </div>
                  </>
                );
              })}
            <button onClick={() => this.handleCreateUser()}>Create</button>
          </div>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    createUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
// export default withRouter(Home);
// export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
export default connect(mapStateToProps, mapDispatchToProps)(Home);
