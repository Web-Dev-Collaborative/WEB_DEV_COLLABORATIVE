import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";

import tutorial_1 from "../../../assets/images/tutorial/1.png";
import building from "../../../assets/images/tutorial/building.gif";
import preview from "../../../assets/images/tutorial/preview.gif";
import guide from "../../../assets/images/tutorial/guide.gif";

export default class Tutorial extends Component {
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (selectedIndx, e) => {
    console.log("TCL: Tutorial -> handleSelect -> e", e);
    this.setState({
      index: selectedIndx,
      direction: e.direction
    });
  };

  render() {
    let toggle = this.props.toggleOverlay;
    let { index, direction } = this.state;

    return (
      <div className="Container my-5">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval="10000"
          indicators={false}
        >
          <Carousel.Item>
            <img className=" w-50" src={tutorial_1} alt="First slide" />
            <Carousel.Caption>
              <div style={{ marginTop: "50px" }}>
                <h3>عنوان اول شريحة</h3>
                <p style={{ color: "black" }}>اهلا بكم في كوكب البيزا</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="w-25" src={building} alt="Third slide" />

            <Carousel.Caption className="my-2">
              <h3>عنوان ثاني شريحة</h3>
              <p style={{ color: "black" }}>
                اهلا بكم في كوكب البيزا اهلا بكم في كوكب البيزا
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="w-50" src={preview} alt="Third slide" />

            <Carousel.Caption className="my-5">
              <h3>عنوان ثالث شريحة</h3>
              <p style={{ color: "black" }}>اهلا بكم في كوكب البيزا</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="w-25" src={guide} alt="Third slide" />

            <Carousel.Caption className="my-5">
              <h3>عنوان رابع شريحة</h3>
              <p style={{ color: "black" }}>انا هنا للمساعدة</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Button onClick={() => toggle()} variant="dark my-4">
          بعدين يا شيخ
        </Button>
      </div>
    );
  }
}
