import React from "react";
import "./App.css";
import LightBulb from "./components/Lightbulb";
import Button from "./components/Button";
// import Student from './components/Student'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }

  HandleClick = () => {
    console.log(this.setState);
    this.setState({ isLightOn: !this.state.isLightOn });
  };

  render() {
    // console.log(this.state.isLightOn)
    const url = this.state.isLightOn
      ? "https://media.giphy.com/media/26BkNrGhy4DKnbD9u/giphy.gif"
      : "https://media2.giphy.com/media/26BkNrGhy4DKnbD9u/giphy_s.gif?cid=ecf05e476l7j8ye6ksk1brmu0rncumn9fmukoj9p262btao8&rid=giphy_s.gif";
    const text = this.state.isLightOn ? "Turn off" : "Turn on";
    return (
      <div className="App">
        <LightBulb url={url} />
        {/* <button onClick={this.handleClick} style={{padding: "10px 20px"}}>{btnText}</button> */}
        <Button click={this.HandleClick} text={text} />
      </div>
    );
  }
}

export default App;
