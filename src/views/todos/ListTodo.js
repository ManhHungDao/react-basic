import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: 123,
        title: "do home work",
      },
      {
        id: 1323,
        title: "play game",
      },
      {
        id: 13323,
        title: "fishing",
      },
    ],
  };
  handleAddTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Successfully!");
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {++index}-{item.title}
                  </span>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
