import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row
} from "reactstrap";
import OptionsBar1 from "../../Widgets/OptionsBars/OptionsBar1";

class Midterms extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300
    };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    let icons = [
        "icon-folder",
        "icon-folder",
        "icon-cloud-upload",
        "icon-note"
      ],
      colors = ["success", "info", "warning", "primary"],
      values = ["100", "100", "100", "100", "100"],
      headers = ["Ceate", "Open", "Upload", "Quick"],
      comments = [
        "New Timetable",
        "Existing Timetable",
        "Existing Timetable",
        "Scheduling Tutorial"
      ];
    return (
      <div className="animated fadeIn">
        <OptionsBar1
          icons={icons}
          colors={colors}
          values={values}
          comments={comments}
          headers={headers}
        />
      </div>
    );
  }
}

export default Midterms;
