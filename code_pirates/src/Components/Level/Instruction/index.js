import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { findDOMNode } from "react-dom";
import { Button } from "react-bootstrap";

import ReactTooltip from "react-tooltip";
import assistant from "../../../assets/images/pirateBird.png";
import barrel from "../../../assets/images/barrel.png";

import * as actionCreators from "../../../store/actions";

import { connect } from "react-redux";
// import Sound from "react-sound";

class Instruction extends Component {
  state = {
    toolTip: false,

    instruct: [
      "أهلا بالقرصان الصغير",
      "ابدا اللعبة",
      " ضع القطع المناسبة في مكانها!"
    ],
    currentInstruct: 0,
    next: false
  };

  async componentDidMount() {
    let id = this.props.match.params.levelID;

    // await this.props.setGoals(id, ["HTML block", "Head", "Title", "Body"]);
    await this.props.getGoals(id);

    let goals = this.props.goals;

    console.log("TCL: Instruction -> componentDidMount -> goals", goals);

    if (!this.props.overlay) {
      ReactTooltip.show(findDOMNode(this.refs.instruct));
      setTimeout(() => {
        ReactTooltip.hide(findDOMNode(this.refs.instruct));

        this.setState(prevState => ({
          currentInstruct: prevState.currentInstruct + 1,
          next: !prevState.next
        }));
      }, 4000);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "TCL: Instruction -> componentDidUpdate -> prevProps",
      prevProps
    );
    console.log(
      "TCL: Instruction -> componentDidUpdate -> this.props",
      this.props
    );

    let { overlay } = this.props;
    let { instruct, currentInstruct, next } = this.state;

    if (!overlay && !next) {
      this.setState({ next: true });
    }

    if (next && instruct[currentInstruct]) {
      ReactTooltip.show(findDOMNode(this.refs.instruct));
      setTimeout(() => {
        ReactTooltip.hide(findDOMNode(this.refs.instruct));

        this.setState(prevState => ({
          currentInstruct: prevState.currentInstruct + 1,
          next: true
        }));
      }, 3000);
    }
  }

  toggleTip = () => {
    let { toolTip } = this.state;
    if (toolTip) ReactTooltip.hide(findDOMNode(this.refs.instruct));
    else {
      ReactTooltip.show(findDOMNode(this.refs.instruct));
    }

    this.setState({ toolTip: !toolTip });
  };
  render() {
    let { buildingBlocks } = this.props;
    let { instruct, currentInstruct } = this.state;
    console.log("TCL: Instruction -> render -> buildingBlocks", buildingBlocks);

    return (
      <div>
        {/* <Button variant="dark" onClick={this.toggleTip}>
          debug
        </Button> */}
        {/* onClick={() => this.props.toggleOverlay()} */}
        <div>
          <img
            id="instructBird"
            src={assistant}
            style={{ width: "100%", marginTop: "15%" }}
            // data-tip="أهلا بالقرصان الصغير"
            data-tip={instruct[currentInstruct]}
            alt="pirateBird-instruct"
            ref="instruct"
            data-place="top"
            // data-offset="{'left': -30, 'top': -50}"
            data-event="focus"
            data-for="instructBird"
            // data-tip
          />
          <ReactTooltip
            id="instructBird"
            afterShow={e => console.log("img img img", e)}
            afterHide={e => console.log("img img img", e)}
            // place="left"
            // offset={{ left: -50, top: 110 }}

            // getContent={[
            //   () => {
            //     return ["أهلا بالقرصان الصغير"];
            //   },
            //   1000
            // ]}
          />

          <img
            src={barrel}
            className="flex"
            style={{
              width: "20px",
              height: "20%",
              marginTop: "-20px",
              postion: "absolute"
            }}
            data-tip="أهلا بالقرصان الصغير"
            alt="pirateBird-instruct"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buildingBlocks: state.mainReducer.buildingBlocks,
    goals: state.levelsReducer.currentGoals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGoals: id => dispatch(actionCreators.getLevelGoals(id)),
    setGoals: (id, goals) => dispatch(actionCreators.setLevelGoals(id, goals))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Instruction)
);
