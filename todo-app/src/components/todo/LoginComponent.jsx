import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28Minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  render() {
    return (
      <div>
        <h3>Please Login:</h3>
        <div className="container">
          User Name:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn" onClick={this.loginClick}>
            {" "}
            Login
          </button>
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Successful Login</div>}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginClick = () => {
    if (
      this.state.username === "in28Minutes" &&
      this.state.password === "test"
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`welcome/${this.state.username}`);
      // this.setState({showSuccessMessage:true})
      // this.setState({hasLoginFailed:false})
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  };

  // function ShowInvalidCredentials(props){
  //     if(props.hasLoginFailed)
  //         return <div>Login Failed</div>
  //     else
  //         return null
  // }

  // function ShowSuccessfulLogin(props){
  //     if(props.successfulLogin)
  //         return <div>Successful Login</div>
  //     else
  //         return null
  // }
}

export default LoginComponent;
