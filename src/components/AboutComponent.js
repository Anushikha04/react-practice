import React from "react";
import UserClassComponent from "./UserClassComponent";
import { Component } from "react";

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
        <UserClassComponent name={"first"} location={"bhagalpur"} />
        {/* <UserClassComponent name={"second"} location={"bhagalpur"} /> */}
      </>
    );
  }
}

export default AboutComponent;
