import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import Welcome from "./Welcome.jsx";
import ListToDoComponent from "./ListToDoComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorComponent from "./ErrorComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import "./TodoApp.css";

class TodoApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <AuthenticatedRoute path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute path="/todo" component={ListToDoComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>

        {/* <LoginComponent />
                <Hello /> */}
      </div>
    );
  }
}

export default TodoApp;
