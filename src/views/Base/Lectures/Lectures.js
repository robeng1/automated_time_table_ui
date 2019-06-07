import React, { Component } from "react";
import GeneralTimetable from "./Timetables/GeneralTimetable/GeneralTimetable";
import ClassTimetable from "./Timetables/ClassTimetable/ClassTimetable";
import { RibbonButton } from "react-bootstrap-ribbon";
import Widget04 from "../../Widgets/Widget04";
import { relative } from "path";
import CreateTimetable from "./Pages/CreateTimetable";
import App from "../Ribbon/Ribbon";
import GetCourses from "../../Forms/GetCourses";

import Ribbon2 from "../../Base/Ribbon/Ribbon2";
import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  ListGroupItem,
  Form,
  FormGroup,
  FormText,
  Col,
  Row,
  Table
} from "reactstrap";
import { Tab, Nav } from "react-bootstrap";
import SelectCard from "../../Widgets/SelectCard/SelectCard";

class Lectures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  render() {
    let styles = {
      width: "100%"
    };
    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey="1">
          <Row style={styles}>
            <Nav style={styles}>
              <Card style={styles}>
                <CardHeader className="container d-flex">
                  <Nav.Item style={styles}>
                    <Nav.Link eventKey="1">
                      <RibbonButton>
                        <div className="ribbon-icon ">
                          <span className="fa fa-table margin-bottom" />
                        </div>
                        <div>New Table</div>
                      </RibbonButton>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={styles}>
                    <Nav.Link eventKey="2">
                      <RibbonButton>
                        <div className="ribbon-icon">
                          <span className="fa fa-file-o" />
                        </div>
                        <div>Open Existing</div>
                      </RibbonButton>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={styles}>
                    <Nav.Link eventKey="3">
                      <RibbonButton>
                        <div className="ribbon-icon">
                          <span className="fa fa-book" />
                        </div>
                        <div>Quick Tutorial</div>
                      </RibbonButton>
                    </Nav.Link>
                  </Nav.Item>
                </CardHeader>
              </Card>
            </Nav>
          </Row>

          <Row>
            <Tab.Content style={styles}>
              <Tab.Pane eventKey="1">
                <GetCourses />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <Tab.Container>
                  <Ribbon2 />
                  <Tab.Content>
                    <GeneralTimetable />
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <GeneralTimetable />
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
export default Lectures;
