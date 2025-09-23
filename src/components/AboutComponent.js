import React from "react";
import UserClassComponent from "./UserClassComponent";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class AboutComponent extends Component {
  constructor(props1) {
    super(props1);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
     console.log("parent render");
    return (
      <>
        <div>AboutComponent</div>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClassComponent name={"first"} location={"bhagalpur"} />
        {/* <UserClassComponent name={"second"} location={"bhagalpur"} /> */}
      </>
    );
  }
}

export default AboutComponent;
