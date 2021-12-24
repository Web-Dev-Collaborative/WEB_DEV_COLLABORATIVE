import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../../store/actions";
import * as Blocks from "../../../../Library/PiratesCode";

function mapStateToProps(state) {
  return {
    buildingBlocks: state.mainReducer.buildingBlocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetBB: newBB => dispatch(actionCreators.setBuildingBlocks(newBB))
  };
}
class TextBlock extends Component {
  handleChange = event => {
    console.log("TCL: TextBlock -> this.props.tag", this.props.tag);
    let newBB = this.props.buildingBlocks.slice();
    let BB = { children: [...newBB], id: "building" };
    console.log("TCL: TextBlock -> BB", BB);
    console.log("TCL: TextBlock -> event.target.value", event.target.value);

    this.props.searchTreeText(
      BB,
      this.props.tag.id,
      new Blocks.TextBlock(event.target.value)
    );
    console.log("searchTreeText wtf");
    this.props.onSetBB(newBB);
  };
  render() {
    const { provided, tag, index } = this.props;
    return (
      <div>
        <input
          name={`text-${tag.name}-${index}`}
          type="text"
          //   value={this.state[`text-${tag.name}-${index}`]}
          onChange={this.handleChange}
        />
        <label> النص</label>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextBlock);
