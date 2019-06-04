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

let currentId = 0;
let activeGroupId = JsonData[0].groupName;

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.handle_add_room = this.handle_add_room.bind(this);

    this.state = {
      data: JsonData,
      classroomGroupComponents: this.classroomGroupComponents,
      groupNames: [],
      activeGroupId: JsonData[0].groupName,
      addRoomBtnState: true,
      nextId: currentId + 1
    };

    let groupNames = this.state.data.map(classGroup => classGroup.groupName);
    this.state.groupNames = groupNames; //Initialising the groupNames
    let classroomGroupComponents = this.state.data.map(classGroup => (
      <Tab.Pane eventKey={classGroup.groupName}>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            {classGroup.groupName}
          </CardHeader>
          <CardBody>
            <Table responsive striped contentEditable="true">
              <thead contentEditable="false">
                <tr>
                  <th>Name</th>
                  <th>Capacity</th>
                  <th>Allowance</th>
                  <th>Building</th>
                </tr>
              </thead>
              <tbody>
                {classGroup.rooms.map(classroom => (
                  <tr id={classroom.id}>
                    <td>{classroom.name}</td>
                    <td>{classroom.capacity}</td>
                    <td>{classroom.allowance}</td>
                    <td>{classroom.building}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Button color="primary" size="sm" onClick={this.handle_add_room}>
              Add Classroom
            </Button>
          </CardFooter>
        </Card>
      </Tab.Pane>
    ));
    this.state.classroomGroupComponents = classroomGroupComponents; //Initalizing the rooms components
  }
  handle_add_group = () => {
    let newGroupName = prompt("Please enter the group name");

    if (newGroupName) {
      this.setState(prevState => {
        return {
          data: [
            ...prevState.data,
            {
              groupName: newGroupName,
              rooms: [
                {
                  id: 0,
                  name: "Class Name here",
                  capacity: 0,
                  allowance: 0,
                  building: "Building Name"
                }
              ]
            }
          ],
          classroomGroupComponents: [
            ...prevState.classroomGroupComponents,
            <Tab.Pane eventKey={newGroupName}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify" />
                  {newGroupName}
                </CardHeader>
                <CardBody>
                  <Table responsive striped contentEditable="true">
                    <thead contentEditable="false">
                      <tr>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Allowance</th>
                        <th>Building</th>
                      </tr>
                    </thead>
                    <tbody />
                  </Table>
                </CardBody>
                <CardFooter>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={this.handle_add_room}
                  >
                    Add Classroom
                  </Button>
                </CardFooter>
              </Card>
            </Tab.Pane>
          ],
          groupNames: [...prevState.groupNames, newGroupName],
          activeGroupId: newGroupName,
          addRoomBtnState: true,
          nextId: currentId + 1
        };
      });
    }
  };

  handle_add_room = () => {
    this.setState(prevState => {
      return {
        data: prevState.data,
        classroomGroupComponents: prevState.data.map(classGroup => (
          <Tab.Pane eventKey={classGroup.groupName}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                {classGroup.groupName}
              </CardHeader>
              <CardBody>
                <Table responsive striped contentEditable="true">
                  <thead contentEditable="false">
                    <tr>
                      <th>Name</th>
                      <th>Capacity</th>
                      <th>Allowance</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classGroup.rooms.map(classroom => (
                      <tr id={classroom.id}>
                        <td>{classroom.name}</td>
                        <td>{classroom.capacity}</td>
                        <td>{classroom.allowance}</td>
                        <td>{classroom.building}</td>
                      </tr>
                    ))}

                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  size="sm"
                  onClick={this.handle_add_room}
                >
                  Add Classroom
                </Button>
              </CardFooter>
            </Card>
          </Tab.Pane>
        )),
        groupNames: prevState.groupNames,
        addRoomBtnState: true,
        nextId: currentId + 1
      };
    });
  };

  RoomGroupList = () => {
    let styles = {
      margin: "0px",
      marginLeft: "30%",
      float: "right"
    };
    let room_groups_group_names = this.state.groupNames.map(groupName => (
      <Nav.Item
        onClick={e => {
          activeGroupId = e.target.id;
        }}
        id={groupName}
      >
        <Nav.Link eventKey={groupName}>
          <li
            style={{ cursor: "pointer", animation: 0.5 }}
            className="list-group-item list-group-item-action p-2"
          >
            <ListGroupItem
              key={groupName}
              className="list-group-item-info d-flex"
            >
              {groupName}
              <i className="fa fa-arrow-right" style={styles} />
            </ListGroupItem>
          </li>
        </Nav.Link>
      </Nav.Item>
    ));

    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify" />
          <strong>Classroom Groups</strong>
        </CardHeader>
        <CardBody>
          <ListGroup>{room_groups_group_names}</ListGroup>
        </CardBody>
        <CardFooter>
          <Button
            onClick={this.handle_add_group}
            type="submit"
            size="sm"
            color="success"
          >
            <i className="fa fa-plus" /> New
          </Button>
        </CardFooter>
      </Card>
    );
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey={this.state.groupNames[0]}>
          <Row>
            <Col xs="12" lg="9">
              <Tab.Content>{this.state.classroomGroupComponents}</Tab.Content>
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

              <Nav className="flex-column">{this.RoomGroupList()}</Nav>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Rooms;
