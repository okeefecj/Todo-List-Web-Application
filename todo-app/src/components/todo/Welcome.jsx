import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService.js";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: " ",
      errorMessageLoaded: false,
    };

    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todo
          list&nbsp;
          <Link to="/todo">here.</Link>
        </div>

        <div>
          {this.state.errorMessageLoaded === false && (
            <button
              onClick={this.retrievePathVariableMessage}
              className="btn-success"
            >
              Get Welcome Message
            </button>
          )}
          {this.state.errorMessage}
        </div>

        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService().then((response) =>
      this.handleSuccessfulResponse(response)
    );
  };

  retrieveBeanMessage = () => {
    HelloWorldService.executeHelloWorldBeanService().then((response) =>
      this.handleSuccessfulResponse(response)
    );
  };

  retrievePathVariableMessage = () => {
    HelloWorldService.executeHelloWorldPathVariablService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleErrorResponse(error));
  };
  handleSuccessfulResponse(response) {
    this.setState({ welcomeMessage: response.data.message });
  }

  handleErrorResponse = (error) => {
    this.setState({ errorMessage: error.response.data.message });
    this.setState({ errorMessageLoaded: true });
  };
}

export default Welcome;
