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

const JsonData = [
  {
    groupName: "College of Engineering Lectures",
    Lecturers: [
      {
        Id: 1,
        Title: "Mr",
        Name: "B. Kommey",
        IdNumber: "156516",
        Department: "Computer Eng",
        Email: "bkommey@gmail.com",
        OfficeNumber: "A205"
      },
      {
        Id: 2,
        Title: "Mr",
        Name: "B. Kommey",
        IdNumber: "156516",
        Department: "Computer Eng",
        Email: "bkommey@gmail.com",
        OfficeNumber: "A205"
      },
      {
        Id: 3,
        Title: "Mr",
        Name: "B. Kommey",
        IdNumber: "156516",
        Department: "Computer Eng",
        Email: "bkommey@gmail.com",
        OfficeNumber: "A205"
      },
      {
        Id: 4,
        Title: "Mr",
        Name: "B. Kommey",
        IdNumber: "156516",
        Department: "Computer Eng",
        Email: "bkommey@gmail.com",
        OfficeNumber: "A205"
      },
      {
        Id: 5,
        Title: "Mr",
        Name: "B. Kommey",
        IdNumber: "156516",
        Department: "Computer Eng",
        Email: "bkommey@gmail.com",
        OfficeNumber: "A205"
      }
    ]
  }
];

// {
//   groupName: "College of Medecine",
//   Lecturers: [
//     {
//       Id: 11,
//       Title: "Mis",
//       Name: "Nadine Azo",
//       IdNumber: "631547",
//       Department: "Human Anatomy",
//       Email: "nazo@gmail.com",
//       OfficeNumber: "B105"
//     },
//     {
//       Id: 12,
//       Title: "Mis",
//       Name: "Nadine Azo",
//       IdNumber: "631547",
//       Department: "Human Anatomy",
//       Email: "nazo@gmail.com",
//       OfficeNumber: "B105"
//     },
//     {
//       Id: 13,
//       Title: "Mis",
//       Name: "Nadine Azo",
//       IdNumber: "631547",
//       Department: "Human Anatomy",
//       Email: "nazo@gmail.com",
//       OfficeNumber: "B105"
//     },
//     {
//       Id: 14,
//       Title: "Mis",
//       Name: "Nadine Azo",
//       IdNumber: "631547",
//       Department: "Human Anatomy",
//       Email: "nazo@gmail.com",
//       OfficeNumber: "B105"
//     },
//     {
//       Id: 15,
//       Title: "Mis",
//       Name: "Nadine Azo",
//       IdNumber: "631547",
//       Department: "Human Anatomy",
//       Email: "nazo@gmail.com",
//       OfficeNumber: "B105"
//     }
//   ]
// }
class Lecturers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: JsonData,
      activeGroupNav: JsonData[0].groupName
    };
    this.handle_add_lecturers = this.handle_add_lecturers.bind(this);
    this.handle_add_lecturer = this.handle_add_lecturer.bind(this);
    this.handle_save_lecturer = this.handle_save_lecturer.bind(this);
    this.handle_active_nav = this.handle_active_nav.bind(this);
    this.handle_edit_lecturer = this.handle_edit_lecturer.bind(this);
  }

  handle_edit_lecturer() {
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

  handle_add_lecturers() {
    let newGroupName = prompt("Please enter Department name");

    if (newGroupName) {
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              groupName: newGroupName,
              Lecturers: [
                {
                  Id: 0,
                  Title: "",
                  Name: "",
                  IdNumber: "",
                  Department: "",
                  Email: "",
                  OfficeNumber: ""
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
        document.getElementById(`table-${newGroupName}`).contentEditable =
          "true";
        document.getElementById(`addBtn-${newGroupName}`).className =
          "btn btn-info btn-sm mr-4";
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
  handle_add_lecturer() {
    this.setState(prevState => {
      return {
        data: [...prevState.data].map(group => {
          if (group.groupName === this.state.activeGroupNav) {
            return {
              groupName: group.groupName,
              Lecturers: [
                ...group.Lecturers,
                {
                  Id: 0,
                  Title: "",
                  Name: "",
                  IdNumber: "",
                  Department: "",
                  Email: "",
                  OfficeNumber: ""
                }
              ]
            };
          } else return group;
        }),
        activeGroupNav: prevState.activeGroupNav
      };
    });
  }
  handle_save_lecturer() {
    let tr = [
      ...document.getElementsByClassName(
        `lecturer-${this.state.activeGroupNav}`
      )
    ];
    let allEntries = [],
      tracker = {},
      i = 0,
      x = 0;

    while (i < tr.length) {
      tracker.id = x;
      tracker.Title = tr[i].innerHTML;
      i++;
      tracker.Name = tr[i].innerHTML;
      i++;
      tracker.IdNumber = tr[i].innerHTML;
      i++;
      tracker.Department = tr[i].innerHTML;
      i++;
      tracker.Email = tr[i].innerHTML;
      i++;
      tracker.OfficeNumber = tr[i].innerHTML;
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
              Lecturers: allEntries
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
    let lecturersListComponent = this.state.data.map(dataGroup => (
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
                  <th>Title</th>
                  <th>Name</th>
                  <th>ID Number</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Office Number</th>
                </tr>
              </thead>
              <tbody>
                {dataGroup.Lecturers.map(lecturer => (
                  <tr key={lecturer.id}>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.Title}
                    </td>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.Name}
                    </td>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.IdNumber}
                    </td>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.Department}
                    </td>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.Email}
                    </td>
                    <td className={`lecturer-${dataGroup.groupName}`}>
                      {lecturer.OfficeNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Button
              onClick={this.handle_add_lecturer}
              color="primary"
              size="sm"
              className="mr-3"
              className="d-none"
              id={`addBtn-${dataGroup.groupName}`}
            >
              Add Lecturer
            </Button>
            <Button
              onClick={this.handle_edit_lecturer}
              color="info"
              size="sm"
              className="mr-3"
              id={`editBtn-${dataGroup.groupName}`}
            >
              Edit
            </Button>
            <Button
              onClick={this.handle_save_lecturer}
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
    let lecturersGroupListComponent = this.state.data.map(dataGroup => (
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
              <Tab.Content>{lecturersListComponent}</Tab.Content>
            </Col>
            <Col sm="12" xl="3">
              <Nav className="flex-column">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" />
                    <strong>Lecturers Groups</strong>
                    <div className="card-header-actions" />
                  </CardHeader>

                  <CardBody
                    style={{
                      overflowY: "auto",
                      height: "250px"
                    }}
                  >
                    {lecturersGroupListComponent}
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={this.handle_add_lecturers}
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

export default Lecturers;
