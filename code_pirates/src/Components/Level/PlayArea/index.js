import React, { Component } from "react";
import ListOfBlock from "../ListOfBlock";
import BuildingBoard from "../BuildingBoard";
import PreviewBorad from "../PreviewBoard";
import { DragDropContext } from "react-beautiful-dnd";
import * as Blocks from "../../../Library/PiratesCode";

import { Link } from "react-router-dom";

import Instruction from "../Instruction";
import Tutorial from "./Tutorial";

// Connection with redux centeral store
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";

import styled from "styled-components";

let Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  visibility: ${props => {
    console.log("TCL: props", props.children);
    return props.overlay ? "visible" : "hidden";
  }};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  cursor: pointer;
`;

class PlayArea extends Component {
  state = {
    overlay: true
  };
  searchTree = (block, blockID, newBlock) => {
    /*  
    check if the block id from the object is the same as the one we're dropping into
    if it is, insert whatever we dropped into its children.
    */
    console.log("TCL: PlayArea -> searchTree -> block.id", block.id);

    if (block.id === blockID) {
      // add to children
      block.children.push(newBlock);

      return block;
    } else if (block.children.length) {
      let i;
      let result = null;
      for (i = 0; result == null && i < block.children.length; i++) {
        result = this.searchTree(block.children[i], blockID, newBlock);
      }
      return result;
    }
    return null;
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }
    // console.log(
    //   "TCL: PlayArea -> destination.droppableId",
    //   destination.droppableId
    // );

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newBlock;
    switch (draggableId) {
      case "p":
        newBlock = new Blocks.PBlock(
          [new Blocks.TextBlock("صغير بس فنان")],
          `p-${this.props.buildingBlocks.length}`
        );
        break;
      case "h1":
        newBlock = new Blocks.H1Block(
          [new Blocks.TextBlock("رهييب")],
          `h1-${this.props.buildingBlocks.length}`
        );
        break;
      case "img":
        newBlock = new Blocks.ImgBlock();
        break;
      default:
        console.error(`draggableId: ${draggableId} is NOT Implemented!!`);
    }

    if (destination.droppableId === "building") {
      this.props.onAddBlock(newBlock);
    } else {
      let newBB = this.props.buildingBlocks.slice();
      let BB = { children: [...newBB], id: "building" };
      this.searchTree(BB, destination.droppableId, newBlock);
      this.props.onSetBB(newBB);
    }
  };

  handleDroppingBlock = newBlock => {
    console.log(
      "TCL: PlayArea -> handleDroppingBlock -> handleDroppingBlock",
      newBlock
    );
  };

  toggleOverlay = () => {
    this.setState(prevState => ({ overlay: !prevState.overlay }));
  };

  componentDidMount() {}

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="col-12 main-content text-center">
          <Link style={{ textDecorationLine: "none" }} to="/levels">
            <h1>قراصنة البرمجة</h1>
          </Link>

          <Overlay overlay={this.state.overlay}>
            <Tutorial toggleOverlay={this.toggleOverlay} />
          </Overlay>

          <div className="row mt-4 justify-content-center">
            <div className="col-10 mr-2 list-of-blocks-board">
              <h2 className="mt-3">منطقة الأدوات</h2>
              <ListOfBlock />
            </div>
            <div className="col-2 ml-2 instructions-board">
              <Instruction
                toggleOverlay={this.toggleOverlay}
                overlay={this.state.overlay}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 building-board-area my-3 mr-2">
              <h2 className="mt-3">منطقة البناء</h2>
              <BuildingBoard tags={this.props.buildingBlocks} />
            </div>
            <div className="col-6 preview-borad-area my-3 ml-2">
              {/* <h2 className="mt-3">شاشة العرض</h2> */}
              <PreviewBorad buildingBlocks={this.props.buildingBlocks} />
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.mainReducer.tags,
  buildingBlocks: state.mainReducer.buildingBlocks,
  textObj: state.mainReducer.textObj
});

const mapDispatchToProps = dispatch => ({
  onAddBlock: block => dispatch(actionCreators.addBuildingBlock(block)),
  onSetBB: newBB => dispatch(actionCreators.setBuildingBlocks(newBB))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayArea);
