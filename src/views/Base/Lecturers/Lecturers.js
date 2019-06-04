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
  },
  {
    groupName: "College of Medecine",
    Lecturers: [
      {
        Id: 11,
        Title: "Mis",
        Name: "Nadine Azo",
        IdNumber: "631547",
        Department: "Human Anatomy",
        Email: "nazo@gmail.com",
        OfficeNumber: "B105"
      },
      {
        Id: 12,
        Title: "Mis",
        Name: "Nadine Azo",
        IdNumber: "631547",
        Department: "Human Anatomy",
        Email: "nazo@gmail.com",
        OfficeNumber: "B105"
      },
      {
        Id: 13,
        Title: "Mis",
        Name: "Nadine Azo",
        IdNumber: "631547",
        Department: "Human Anatomy",
        Email: "nazo@gmail.com",
        OfficeNumber: "B105"
      },
      {
        Id: 14,
        Title: "Mis",
        Name: "Nadine Azo",
        IdNumber: "631547",
        Department: "Human Anatomy",
        Email: "nazo@gmail.com",
        OfficeNumber: "B105"
      },
      {
        Id: 15,
        Title: "Mis",
        Name: "Nadine Azo",
        IdNumber: "631547",
        Department: "Human Anatomy",
        Email: "nazo@gmail.com",
        OfficeNumber: "B105"
      }
    ]
  }
];
let activeGroupTab = 0;
class Lecturers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: JsonData
    };
    this.handle_add_lecturers = this.handle_add_lecturers.bind(this);
    this.handle_add_lecrurer = this.handle_add_lecturers.bind(this);
  }

  handle_add_lecturers() {
    let newGroupName = prompt("Please enter the na");
    if (newGroupName) {
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              groupName: newGroupName,
              Lecturers: [
                {
                  Title: "Title here...",
                  Name: "Name here...",
                  IdNumber: "Id number...",
                  Department: newGroupName,
                  Email: "Email",
                  OfficeNumber: "Office number..."
                }
              ]
            }
          ]
        };
      });
    }
  }
  handle_add_lecturer() {
    this.setState(prevState => {
      let activeGroup = prevState.data.filter(
        l => l.groupName === activeGroupTab
      );

      return {
        data: [
          ...prevState.data[Array.indexOf(activeGroup[0].Lecturers)],
          {
            Title: "",
            Name: "",
            IdNumber: "",
            Department: "",
            Email: "",
            OfficeNumber: ""
          }
        ]
      };
    });
  }

  render() {
    let lecturersListComponent = this.state.data.map(dataGroup => (
      <Tab.Pane eventKey={dataGroup.groupName}>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /> {dataGroup.groupName}
          </CardHeader>
          <CardBody>
            <Table responsive striped contentEditable="true">
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
                    <td>{lecturer.Title}</td>
                    <td>{lecturer.Name}</td>
                    <td>{lecturer.IdNumber}</td>
                    <td>{lecturer.Department}</td>
                    <td>{lecturer.Email}</td>
                    <td>{lecturer.OfficeNumber}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Button
              Onclick={this.handle_add_lecturer}
              color="primary"
              size="sm"
            >
              Add Lecturer
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
    let lecturersGroupList = this.state.data.map(dataGroup => (
      <Nav.Item>
        <Nav.Link eventKey={dataGroup.groupName} key={dataGroup.groupName}>
          <li
            style={{ cursor: "pointer", animation: 0.5 }}
            className="list-group-item list-group-item-action p-2"
          >
            <ListGroupItem className="list-group-item-info d-flex">
              {dataGroup.groupName}
              <i className="fa fa-arrow-right" style={styles} />
            </ListGroupItem>
          </li>
        </Nav.Link>
      </Nav.Item>
    ));

    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey={this.state.data[0].groupName}>
          <Row>
            <Col xs="12" lg="9">
              <Tab.Content>{lecturersListComponent}</Tab.Content>
            </Col>
            <Col sm="12" xl="3">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify" />
                  <strong>Upload Data From File</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post">
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

                      <FormText className="help-block pt-3">
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

              <Nav className="flex-column">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" />
                    <strong>Lecturers Groups</strong>
                    <div className="card-header-actions" />
                  </CardHeader>

                  <CardBody>{lecturersGroupList}</CardBody>

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
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Lecturers;
