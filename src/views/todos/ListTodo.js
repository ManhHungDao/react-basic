import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";

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
    editTodo: {},
  };

  handleAddTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add Successful!");
  };

  handleDeleteTodo = (todo) => {
    const currentToto = this.state.listTodos;
    this.setState({
      listTodos: currentToto.filter((item) => item.id !== todo.id),
    });
    toast.success("Delete Successful!");
  };

  handleEditTodo = (todo) => {
    const { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // khi mà ấn nút lưu , data không trống
    if (isEmptyObj === false && editTodo.id === todo.id) {
      // tìm vị trí phần tử cần thay
      const indexObj = listTodos.findIndex((item) => item.id === todo.id);
      // edit todo đã nhận giá trị từ khi bắt event onchange
      listTodos[indexObj].title = editTodo.title;
      this.setState({
        listTodos: listTodos,
        // back todo to empty => re-render when todo is empty => edit
        editTodo: {},
      });
      toast.success("Update Successful!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Simple ToDo App</p>
        <div className="list-todo-container">
          <AddTodo
            handleAddTodo={this.handleAddTodo}
            handleDeleteTodo={this.handleDeleteTodo}
          />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {++index}-{item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {++index}-
                            <input
                              value={editTodo["title"]}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {++index}-{item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button onClick={() => this.handleEditTodo(item)}>
                      {editTodo.id === item.id ? "Save" : "Edit"}
                    </button>
                    <button onClick={() => this.handleDeleteTodo(item)}>
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
