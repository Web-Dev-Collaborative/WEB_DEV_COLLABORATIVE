import React, { Component } from "react";
// import boat from "../../../assets/images/Pirate Ship & Pirates.png";
// import boat from "../../../assets/images/boat.png";
// import cloud from "../../../assets/images/Cloud blue.png";
import Pirate from "../../../assets/images/Pirate 1.png";

class LevelOne extends Component {
  state = {
    active: "",
    head: "",
    title: ""
  };
  handelClick = () => {
    this.setState({ active: "waves" });
  };
  htmlClick = () => {
    this.setState({ head: "head", active: "border" });
  };
  headClick = () => {
    this.setState({ title: "القرصان الصغير" });
  };
  render() {
    return (
      <div>
        <div className={this.state.head}>
          <p
            className="p-3 text-dark"
            style={{ marginRight: "240px", fontSize: "12px" }}
          >
            {this.state.title}
          </p>
        </div>
        <div className={this.state.active}>
          <button className="btn btn-danger" onClick={this.htmlClick}>
            html
          </button>
          <button className="btn btn-warning" onClick={this.headClick}>
            head
          </button>
          <button className="btn btn-dark" onClick={this.handelClick}>
            body
          </button>
          {/* <div className="cloud"> */}
          {/* <img src={cloud} alt={cloud} width="100px" height="100px" />
        </div> */}

          {/* <div className="boat">
          <div className="Pirate">
            <img src={Pirate} alt="Pirate" />
          </div>
        </div> */}
          {/* <div className="">
          <img width="510px" height="520px" />
        </div> */}
          {/* <div className="box">
            <div className="wave lightblue" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default LevelOne;
