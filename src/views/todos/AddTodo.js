import React from "react";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddToDo = () => {
      if(!this.state.title)
      {
    toast.error("Missing Title!");
    return
      }
    this.props.handleAddTodo({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    });
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="add-title">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button type="button" onClick={this.handleAddToDo}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
