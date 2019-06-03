import React, { Component } from "react";
import GeneralTimetable from "./Timetables/GeneralTimetable/GeneralTimetable";
import ClassTimetable from "./Timetables/ClassTimetable/ClassTimetable";
import Widget04 from "../../Widgets/Widget04";
import { relative } from "path";
import CreateTimetable from "./Pages/CreateTimetable";
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
import { Tab, Nav } from "react-bootstrap";
import SelectCard from "../../Widgets/SelectCard/SelectCard";

class Lectures extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <SelectCard
                      icon="fa fa-table fa-5x"
                      button="Create New Table"
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <SelectCard
                      icon="fa fa-file-o fa-5x"
                      button="Open Existing
                    Table"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <SelectCard
                      icon="fa fa-upload fa-5x "
                      button="Upload Table"
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth">
                    <SelectCard
                      icon="fa fa-book fa-5x"
                      button="Quick Tutorial"
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <GeneralTimetable />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <GeneralTimetable />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <GeneralTimetable />
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                  <ClassTimetable />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
export default Lectures;
