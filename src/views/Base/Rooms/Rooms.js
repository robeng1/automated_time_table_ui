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
  },
  {
    groupName: "College of Art",
    rooms: [
      {
        id: 1,
        name: "RM-120",
        capacity: 120,
        allowance: 20,
        building: "COA"
      },
      {
        id: 2,
        name: "RM-120",
        capacity: 120,
        allowance: 20,
        building: "COA"
      },
      {
        id: 3,
        name: "RM-120",
        capacity: 120,
        allowance: 20,
        building: "COA"
      },
      {
        id: 4,
        name: "RM-120",
        capacity: 120,
        allowance: 20,
        building: "COA"
      },
      {
        id: 5,
        name: "RM-120",
        capacity: 120,
        allowance: 20,
        building: "COA"
      }
    ]
  }
];

let currentId = 0;
class RoomGroupList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //count: len(props.items.length)
    };
  }

  render() {
    let styles = {
      margin: "0px",
      marginLeft: "30%",
      float: "right"
    };
    let room_groups_group_names = this.props.items.map(groupName => (
      <Nav.Item>
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
          <Button type="submit" size="sm" color="success">
            <i className="fa fa-plus" /> New
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.handle_add_room = this.handle_add_room.bind(this);

    this.state = {
      data: JsonData,
      classroomGroupComponents: this.classroomGroupComponents,
      groupNames: [],
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

  handle_add_room = () => {
    if (this.state.addRoomBtnState) {
      this.setState(prevState => {
        return {
          data: prevState.data,
          activeTab: 0,
          groupNames: prevState.groupNames,
          addRoomBtnState: false,
          nextId: currentId + 1
        };
      });
    }
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Tab.Container defaultActiveKey={this.state.groupNames[0]}>
          <Row>
            <Col xs="12" lg="9">
              <Tab.Content>{this.state.classroomGroupComponents}</Tab.Content>
              {console.log(this.state)}
            </Col>
            <Col sm="12" xl="3">
              <Nav className="flex-column">
                <RoomGroupList items={this.state.groupNames} />
              </Nav>

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
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Rooms;
