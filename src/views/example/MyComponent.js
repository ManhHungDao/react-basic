import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "dao manh hung",
    chennal: "hoi dan it",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("click me");
  };
  render() {
    return (
      <>
        <div className="fisrt">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          />
          Hello {this.state.name}
        </div>
        <div className="second">My chanel is : {this.state.chennal}</div>
        <div>
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
