import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
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
          Click here to get a custom message
          <button onClick={this.retrieveWelcomeMessage} className="btn-success">
            Get Welcome Message
          </button>
        </div>
      </>
    );
  }

  retrieveWelcomeMessage = () => {
    console.log("retrieve clicked");
  };
}

export default Welcome;
