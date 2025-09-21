import React from "react";
import Child from "./Child";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        login:'Dummy Name',
        location:'Dummy Location'
      }
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
    const data = await fetch(' https://api.github.com/users/Anushikha04')
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json
    })
    // this.timer = setInterval(() => {
    //     console.log("set interval")
    // },1000)
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    // clearInterval(this.timer)
  }
  render() {
    console.log(this.props.name + "child render");
    const { count, count2 } = this.state;
    const { name, location } = this.props;
    const {login} = this.state.userInfo
    return (
      <div className="user-card">
        {/* <Child/> */}
        <h2>{login}</h2>
        <h2>{location}</h2>
        {/* <h3>count: {count}</h3>
         <button onClick={() => {
            this.setState({
                count: this.state.count +1
            })
         }}>+</button>
        <h3>count2: {count2}</h3>
        <button onClick={() => {
            this.setState({
                count2: count2 +1
            })
         }}>+</button> */}
      </div>
    );
  }
}

export default UserClassComponent;
