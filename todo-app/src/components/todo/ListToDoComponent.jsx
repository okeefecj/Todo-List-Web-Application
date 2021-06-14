import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";

class ListToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      message: null,
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.refreshTodos();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Finished</th>
                <th>Target Date</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.state.todo.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.isCompleted.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInName();
    TodoDataService.deleteTodo(username, id).then((repsonse) => {
      this.setState({ message: `Delete of todo ${id} successful` });
      this.refreshTodos();
    });
  }

  refreshTodos = () => {
    let username = AuthenticationService.getLoggedInName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response);
      this.setState({ todo: response.data });
    });
  };
}

export default ListToDoComponent;
