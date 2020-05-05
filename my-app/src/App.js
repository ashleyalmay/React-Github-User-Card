import React from "react";
import axios from "axios";
import info from "./info";
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      myInfo:[] ,
      followersInfo: []
    };
  }  

  componentDidMount() {
    this.getMe();
    this.getFollowers();
  }
  // this is for my github
  getMe = () => {
    axios
    .get('https://api.github.com/users/ashleyalmay')
    .then(response => {
      
      this.setState({
        myInfo: response.data
      })
    })
    .catch(err => console.log(err));
  };
 
//this is for my followers
getFollowers = () => {
  axios
  .get('https://api.github.com/users/ashleyalmay/followers')
  .then(response => {
    this.setState({
      followersInfo: response.data
    })
  })
  .catch(err => console.log(err));
};

// this is where its displayed

render () {
  console.log (this.props);
  return (
    <div className="App">
          <info/>
        
    </div>
  );
} 
}


