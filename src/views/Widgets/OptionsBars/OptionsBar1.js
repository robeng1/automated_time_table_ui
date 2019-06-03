import React from "react";
import { Component } from "react";
import Widget04 from "../Widget04";
import { Col, Row } from "reactstrap";

class OptionsBar1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
      position: "absolute",
      width: "75%",
      top: "20%",
      right: "7%"
    };
    console.log(this.a);
    return (
      <div style={styles}>
        <Row>
          <Col sm="6" md="3">
            <Widget04
              icon={this.props.icons[0]}
              color={this.props.colors[0]}
              header={this.props.headers[0]}
              value={this.props.values[0]}
              invert
            >
              New Timetable
            </Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04
              icon={this.props.icons[1]}
              color={this.props.colors[1]}
              header={this.props.headers[1]}
              value={this.props.values[1]}
              invert
            >
              Existing Timetable
            </Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04
              icon={this.props.icons[2]}
              color={this.props.colors[2]}
              header={this.props.headers[2]}
              value={this.props.values[2]}
              invert
            >
              Existing Timetable
            </Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04
              icon={this.props.icons[3]}
              color={this.props.colors[3]}
              header={this.props.headers[3]}
              value={this.props.values[3]}
              invert
            >
              Scheduling Tutorial
            </Widget04>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OptionsBar1;
