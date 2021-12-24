import React, { Component } from "react";
import Parser from "html-react-parser";
// import * as data from "./data";

// Our beutiful library
import * as Blocks from "../../../Library/PiratesCode";

import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import LevelOne from "../LevelOne";

class PreviewBoard extends Component {
  // state = {
  //   buildingBlocks: this.props.buildingBlocks
  // };
  // componentDidUpdate = prevProps => {
  //   if (prevProps.buildingBlocks !== this.props.buildingBlocks) {
  //     this.setState({ buildingBlocks: this.props.buildingBlocks });
  //   }
  // };

  render() {
    // [H1Block(), PBlock()].map(elm => elm.compile()).join("") => HTMLString
    // let test = new Blocks.H1Block([new Blocks.TextBlock()]);
    let buildingBlocks = this.props.buildingBlocks;

    console.log("=================");
    console.log("TCL: index -> render -> buildingBlocks", buildingBlocks);
    console.log("=================");

    let testObj = buildingBlocks.map(elm => elm.compile()).join("\n");

    console.log("TCL: index -> render -> testObj", testObj);
    let data = html => {
      return {
        __html: html
      };
    };

    // this's here just for testing..
    let htmlStr = tag => {
      return `
          <div>
            <${tag}>
                This's a test
            <${tag}>		
          </div>
      `;
    };

    return (
      <div className="">
        <div dangerouslySetInnerHTML={data(testObj)} />
        {/* {testObj} */}
        {/* {Parser(test.compile())} */}
        <LevelOne />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // buildingBlocks: state.mainReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // func: arg => dispatch(actionCreators.func(arg)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewBoard);
