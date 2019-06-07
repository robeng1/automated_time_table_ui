import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import {
  CardFooter,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from "reactstrap";
import axios from "axios";

const JsonData = [
  {
    groupName: "Engineering Classrooms",
    rooms: [
      {
        id: 1,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "Petroleum"
      },
      {
        id: 2,
        name: "PB 021",
        capacity: 120,
        allowance: 20,
        building: "Petroleum"
      },
      {
        id: 3,
        name: "PB 022",
        capacity: 120,
        allowance: 20,
        building: "Petroleum"
      },
      {
        id: 4,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "Petroleum"
      },
      {
        id: 5,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "Petroleum"
      }
    ]
  },
  {
    groupName: "College of Science Classrooms",
    rooms: [
      {
        id: 1,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "COS"
      },
      {
        id: 2,
        name: "PB 021",
        capacity: 120,
        allowance: 20,
        building: "COS"
      },
      {
        id: 3,
        name: "PB 022",
        capacity: 120,
        allowance: 20,
        building: "COS"
      },
      {
        id: 4,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "COS"
      },
      {
        id: 5,
        name: "PB 020",
        capacity: 120,
        allowance: 20,
        building: "COS"
      }
    ]
  }
];

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeGroupNav: ""
    };
    this.handle_add_rooms = this.handle_add_rooms.bind(this);
    this.handle_add_room = this.handle_add_room.bind(this);
    this.handle_save_room = this.handle_save_room.bind(this);
    this.handle_active_nav = this.handle_active_nav.bind(this);
    this.handle_edit_room = this.handle_edit_room.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/table").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  handle_edit_room() {
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

  handle_add_rooms() {
    let newGroupName = prompt("Please enter Department name");

    if (newGroupName) {
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              groupName: newGroupName,
              rooms: [
                {
                  id: 0, // the id is updated to the actual value when the save button is clicked
                  name: "",
                  capacity: "",
                  allowance: "",
                  building: ""
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
  handle_add_room() {
    this.setState(prevState => {
      return {
        data: [...prevState.data].map(group => {
          if (group.groupName === this.state.activeGroupNav) {
            return {
              groupName: group.groupName,
              rooms: [
                ...group.rooms,
                {
                  id: 0, // the id is updated to the actual value when the save button is clicked
                  name: "",
                  capacity: "",
                  allowance: "",
                  building: ""
                }
              ]
            };
          } else return group;
        }),
        activeGroupNav: prevState.activeGroupNav
      };
    });
  }
  handle_save_room() {
    let tr = [
      ...document.getElementsByClassName(`room-${this.state.activeGroupNav}`)
    ];
    let allEntries = [],
      tracker = {},
      i = 0,
      x = 0;

    while (i < tr.length) {
      tracker.id = x;
      tracker.name = tr[i].innerHTML;
      i++;
      tracker.capacity = tr[i].innerHTML;
      i++;
      tracker.allowance = tr[i].innerHTML;
      i++;
      tracker.building = tr[i].innerHTML;
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
              rooms: allEntries
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
    const { data, activeGroupNav } = this.state;
    let styles = {
      margin: "0px",
      marginLeft: "30%",
      float: "right"
    };

    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey={activeGroupNav} id="tab-container">
          <Row>
            <Col xs="12" lg="9">
              <Tab.Content>
                {data.map(dataGroup => (
                  <Tab.Pane eventKey={dataGroup.groupName}>
                    <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify" />{" "}
                        {dataGroup.groupName}
                      </CardHeader>
                      <CardBody style={{ overflowY: "auto", height: "300px" }}>
                        <Table
                          id={`table-${dataGroup.groupName}`}
                          responsive
                          striped
                          contentEditable="false"
                        >
                          <thead contentEditable="false">
                            <tr>
                              <th>Name</th>
                              <th>Capacity</th>
                              <th>location</th>
                              <th>allowance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataGroup.rooms.map(room => (
                              <tr key={room.name}>
                                <td className={`room-${dataGroup.groupName}`}>
                                  {room.name}
                                </td>
                                <td className={`room-${dataGroup.groupName}`}>
                                  {room.capacity}
                                </td>
                                <td className={`room-${dataGroup.groupName}`}>
                                  {room.location}
                                </td>
                                <td className={`room-${dataGroup.groupName}`}>
                                  {room.allowance}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <Button
                          onClick={this.handle_add_room}
                          color="primary"
                          size="sm"
                          className="mr-3"
                          className="d-none"
                          id={`addBtn-${dataGroup.groupName}`}
                        >
                          Add a room
                        </Button>
                        <Button
                          onClick={this.handle_edit_room}
                          color="info"
                          size="sm"
                          className="mr-3"
                          id={`editBtn-${dataGroup.groupName}`}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={this.handle_save_room}
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
                ))}
              </Tab.Content>
            </Col>
            <Col sm="12" xl="3">
              <Nav activeKey={activeGroupNav} className="flex-column">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify" />
                    <strong>Rooms Group</strong>
                    <div className="card-header-actions" />
                  </CardHeader>

                  <CardBody
                    style={{
                      overflowY: "auto",
                      height: "250px"
                    }}
                  >
                    {data.map(dataGroup => (
                      <Nav.Item>
                        <Nav.Link
                          onClick={() =>
                            this.handle_active_nav(dataGroup.groupName)
                          }
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
                              <i className="fa fa-arrow-right" style={styles} />
                            </ListGroupItem>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={this.handle_add_rooms}
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

export default Rooms;
