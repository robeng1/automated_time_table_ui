import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Collapse,
  Fade,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { AppSwitch } from "@coreui/react";
import { Button, Table, ListGroup, ListGroupItem } from "reactstrap";
import { Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { Tab, Nav } from "react-bootstrap";
import { TabContainer } from "react-bootstrap";
let JsonData = [
  {
    groupName: "Computer Engineering 3 Courses",
    Courses: [
      {
        id: 0,
        Name: "Operating Systems",
        CourseCode: "COE 354",
        Credit: "4"
      },
      {
        id: 1,
        Name: "Introduction to Software Eng.",
        CourseCode: "COE 356",
        Credit: "3"
      },
      {
        id: 2,
        Name: "Embedded Systems",
        CourseCode: "COE 358",
        Credit: "3"
      },
      {
        id: 3,
        Name: "Database and Information Retrieval",
        CourseCode: "COE 368",
        Credit: "3"
      },
      {
        id: 4,
        Name: "Digital Computer Design",
        CourseCode: "COE 382",
        Credit: "3"
      },
      {
        id: 5,
        Name: "Autotronic LAB",
        CourseCode: "COE 392",
        Credit: "2"
      }
    ]
  }
];

class Colleges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JsonData,
      activeGroupNav: JsonData[0].groupName
    };
    this.handle_add_courses = this.handle_add_courses.bind(this);
    this.handle_add_course = this.handle_add_course.bind(this);
    this.handle_save_course = this.handle_save_course.bind(this);
    this.handle_active_nav = this.handle_active_nav.bind(this);
    this.handle_edit_course = this.handle_edit_course.bind(this);
  }

  handle_edit_course() {
    document.getElementById(`saveBtn-${this.state.activeGroupNav}`).className =
      "btn btn-success btn-sm mr-4";
    document.getElementById(`addBtn-${this.state.activeGroupNav}`).className =
      "btn btn-info btn-sm mr-4";
    document.getElementById(`editBtn-${this.state.activeGroupNav}`).className =
      "d-none";
    document.getElementById(
      `table-${this.state.activeGroupNav}`
    ).contentEditable = "true";
  }

  handle_add_courses() {
    let newGroupName = prompt("Please enter Department name");

    if (newGroupName) {
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              groupName: newGroupName,
              Courses: [
                {
                  Id: 0,
                  Name: "",
                  CourseCode: "",
                  Credit: ""
                }
              ]
            }
          ],
          activeGroupNav: newGroupName
        };
      });
      setTimeout(() => {
        document.getElementById(`saveBtn-${newGroupName}`).className =
          "btn btn-success btn-sm";
        document.getElementById(`tab-container-tab-${newGroupName}`).click();
        document.getElementById(`addBtn-${newGroupName}`).className =
          "btn btn-info btn-sm mr-4";
        document.getElementById(`table-${newGroupName}`).contentEditable =
          "true";
        document.getElementById(`editBtn-${newGroupName}`).className = "d-none";
      }, 30);
    }
  }
  handle_active_nav(groupName) {
    this.setState(prevState => {
      return {
        data: prevState.data,
        activeGroupNav: groupName
      };
    });
  }
  handle_add_course() {
    this.setState(prevState => {
      return {
        data: [...prevState.data].map(group => {
          if (group.groupName === this.state.activeGroupNav) {
            return {
              groupName: group.groupName,
              Courses: [
                ...group.Courses,
                {
                  Id: 0,
                  Name: "",
                  CourseCode: "",
                  Credit: ""
                }
              ]
            };
          } else return group;
        }),
        activeGroupNav: prevState.activeGroupNav
      };
    });
  }
  handle_save_course() {
    let tr = [
      ...document.getElementsByClassName(`course-${this.state.activeGroupNav}`)
    ];
    let allEntries = [],
      tracker = {},
      i = 0,
      x = 0;

    while (i < tr.length) {
      tracker.id = x;
      tracker.Name = tr[i].innerHTML;
      i++;
      tracker.CourseCode = tr[i].innerHTML;
      i++;
      tracker.Credit = tr[i].innerHTML;
      allEntries.push(Object.assign({}, tracker));
      i++;
      x++;
    }
    this.setState(prevState => {
      return {
        data: [...prevState.data].map(group => {
          if (group.groupName === this.state.activeGroupNav) {
            return {
              groupName: group.groupName,
              Courses: allEntries
            };
          } else return group;
        }),
        activeGroupNav: prevState.activeGroupNav
      };
    });
    document.getElementById(`saveBtn-${this.state.activeGroupNav}`).className =
      "d-none";
    document.getElementById(`addBtn-${this.state.activeGroupNav}`).className =
      "d-none";
    document.getElementById(`editBtn-${this.state.activeGroupNav}`).className =
      "btn btn-info btn-sm mr-4";
    document.getElementById(
      `table-${this.state.activeGroupNav}`
    ).contentEditable = "false";
  }

  render() {
    let CoursesListComponent = this.state.data.map(dataGroup => (
      <Tab.Pane eventKey={dataGroup.groupName}>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /> {dataGroup.groupName}
          </CardHeader>
          <CardBody style={{ overflowY: "auto", height: "400px" }}>
            <Table
              id={`table-${dataGroup.groupName}`}
              responsive
              striped
              contentEditable="false"
            >
              <thead contentEditable="false">
                <tr>
                  <th>Name</th>
                  <th>Course Code</th>
                  <th>Credit</th>
                </tr>
              </thead>
              <tbody>
                {dataGroup.Courses.map(course => (
                  <tr key={course.id}>
                    <td className={`course-${dataGroup.groupName}`}>
                      {course.Name}
                    </td>
                    <td className={`course-${dataGroup.groupName}`}>
                      {course.CourseCode}
                    </td>
                    <td className={`course-${dataGroup.groupName}`}>
                      {course.Credit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Button
              onClick={this.handle_add_course}
              color="primary"
              size="sm"
              className="mr-3"
              className="d-none"
              id={`addBtn-${dataGroup.groupName}`}
            >
              Add a Course
            </Button>
            <Button
              onClick={this.handle_edit_course}
              color="info"
              size="sm"
              className="mr-3"
              id={`editBtn-${dataGroup.groupName}`}
            >
              Edit
            </Button>
            <Button
              onClick={this.handle_save_course}
              color="success"
              size="sm"
              className="d-none"
              id={`saveBtn-${dataGroup.groupName}`}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </Tab.Pane>
    ));
    let styles = {
      margin: "0px",
      marginLeft: "30%",
      float: "right"
    };
    let coursesGroupListComponent = this.state.data.map(dataGroup => (
      <Nav.Item>
        <Nav.Link
          onClick={() => this.handle_active_nav(dataGroup.groupName)}
          eventKey={dataGroup.groupName}
          key={dataGroup.groupName}
        >
          <li className="list-group-item list-group-item-action p-2">
            <ListGroupItem
              className="list-group-item-info d-flex h-10"
              style={{
                cursor: "pointer",
                animation: 0.5
              }}
            >
              {dataGroup.groupName}
            </ListGroupItem>
          </li>
        </Nav.Link>
      </Nav.Item>
    ));

    return (
      <div className="animated fadeIn">
        <Tab.Container
          defaultActiveKey={this.state.activeGroupNav}
          id="tab-container"
        >
          <Row>
            <Col xs="12" lg="9">
              <Tab.Content>{CoursesListComponent}</Tab.Content>
            </Col>
            <Col sm="12" xl="3">
              <Nav className="flex-column">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" />
                    <strong>Course Groups</strong>
                    <div className="card-header-actions" />
                  </CardHeader>

                  <CardBody
                    style={{
                      overflowY: "auto",
                      height: "250px"
                    }}
                  >
                    {coursesGroupListComponent}
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={this.handle_add_courses}
                      type="submit"
                      size="sm"
                      color="success"
                    >
                      <i className="fa fa-plus" /> New
                    </Button>
                  </CardFooter>
                </Card>
              </Nav>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify" />
                  <strong>Upload Data From File</strong>
                </CardHeader>
                <CardBody>
                  <Form
                    action=""
                    method="post"
                    style={{
                      height: "30px"
                    }}
                  >
                    <FormGroup>
                      <div className="badge badge-primary badge-info p-2 w-5 d-block badge-action">
                        <i className="fa fa-upload fa-upload-sm gb-dark pl-10" />
                        <span> Choose a file...</span>
                        <input
                          type="file"
                          size="25"
                          id="file1"
                          style={{
                            opacity: 0,
                            cursor: "pointer",
                            position: "relative",
                            marginTop: 0,
                            float: "left"
                          }}
                        />
                      </div>

                      <FormText className="help-block pt-0">
                        Accepted formats are .csv and .xlsx
                      </FormText>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="success">
                    <i className="fa fa-upload" /> Upload
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Colleges;
