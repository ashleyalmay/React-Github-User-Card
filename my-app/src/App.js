import React from "react";
import axios from "axios";
import Info from "./info";
import "./index.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      myInfo:[] ,
      followersInfo: []
    };
  }  

  componentDidMount() {
     // this is for my github
    axios
    .get('https://api.github.com/users/ashleyalmay')
    .then(response => {
      this.setState({myInfo: response.data})
      console.log(response)
    })
    //this is for my followers
  axios
  .get('https://api.github.com/users/ashleyalmay/followers')
  .then(response => {
      this.setState({followersInfo: response.data})
      console.log(response)
  })
  .catch(err => console.log(err));
  }

// this is where its displayed
render () {
  return (
    <div className="cards">
      <div className="card">
          <Info></Info>
          
          </div>
    </div>
  );
} 
}


