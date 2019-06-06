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
      cursor: "pointer",
      animation: 0.5,
      width: "100%"
    };
    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey="first">
          <Row>
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
            <Col sm={3}>
              <Nav className="flex-column">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" />
                    <strong>Option Panel</strong>
                    <div className="card-header-actions" />
                  </CardHeader>

                  <CardBody>
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <li className="list-group-item list-group-item-action p-2">
                          <ListGroupItem
                            className="list-group-item-info d-flex h-10"
                            style={styles}
                          >
                            <i className="fa fa-table fa-2x mr-3" />
                            Create New Table
                          </ListGroupItem>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <li className="list-group-item list-group-item-action p-2">
                          <ListGroupItem
                            className="list-group-item-info d-flex h-10"
                            style={styles}
                          >
                            <i className="fa fa-file-o fa-2x mr-3" />
                            Open Existing
                          </ListGroupItem>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <li className="list-group-item list-group-item-action p-2">
                          <ListGroupItem
                            className="list-group-item-info d-flex h-10"
                            style={styles}
                          >
                            <i className="fa fa-upload fa-2x mr-3 " />
                            Uplaod Table
                          </ListGroupItem>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">
                        <li className="list-group-item list-group-item-action p-2">
                          <ListGroupItem
                            className="list-group-item-info d-flex h-10"
                            style={styles}
                          >
                            <i className="fa fa-book fa-2x mr-3" />
                            Quick Tutorial
                          </ListGroupItem>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                  </CardBody>

                  <CardFooter />
                </Card>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
export default Lectures;
