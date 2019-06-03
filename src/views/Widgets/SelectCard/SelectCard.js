import React from "react";
import { Component } from "react";

import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Table
} from "reactstrap";

class SelectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const iStyle = {
      color: "info",
      marginLeft: "2%",
      marginRight: "2%"
    };

    const mainStyle = {
      width: "100%",
      display: "flex",
      border: "solid 1px",
      borderRadius: "3px"
    };

    const buttonStyle = {
      width: "100%"
    };

    return (
      <div style={mainStyle}>
        <i className={this.props.icon} style={iStyle} />
        <Button size="md" style={buttonStyle}>
          {this.props.button}
        </Button>
      </div>
    );
  }
}

export default SelectCard;
