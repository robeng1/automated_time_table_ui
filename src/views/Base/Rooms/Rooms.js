import React, { Component } from "react";
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

const JsonData = {
  classroomGroup1: {
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
  classroomGroup2: {
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
};

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
      <li
        style={{ cursor: "pointer", animation: 0.5 }}
        className="list-group-item list-group-item-action p-2"
      >
        <ListGroupItem key={groupName} className="list-group-item-info">
          {groupName}
          <i className="fa fa-arrow-right" style={styles} />
        </ListGroupItem>
      </li>
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
          <Pagination>
            <PaginationItem disabled>
              <PaginationLink previous tag="button">
                Prev
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button">
                Next
              </PaginationLink>
            </PaginationItem>
            <Button type="submit" size="sm" color="success">
              <i className="fa fa-plus" /> New
            </Button>
          </Pagination>
        </CardFooter>
      </Card>
    );
  }
}

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.handle_add_room = this.handle_add_room.bind(this);

    let classroomGroup1Components = JsonData.classroomGroup1.rooms.map(item => (
      <tr id={item.id}>
        <td>{item.name}</td>
        <td>{item.capacity}</td>
        <td>{item.allowance}</td>
        <td>{item.building}</td>
      </tr>
    ));
    let classroomGroup2Components = JsonData.classroomGroup2.rooms.map(item => (
      <tr id={item.id}>
        <td>{item.name}</td>
        <td>{item.capacity}</td>
        <td>{item.allowance}</td>
        <td>{item.building}</td>
      </tr>
    ));

    let room_components = [
      classroomGroup1Components,
      classroomGroup2Components
    ];
    let groupNames = [
      JsonData.classroomGroup1.groupName,
      JsonData.classroomGroup2.groupName
    ];

    this.state = {
      data: room_components,
      tab: 1,
      groupNames: groupNames,
      addRoomBtnState: true,
      nextId: currentId + 1
    };
  }

  handle_add_room = () => {
    this.setState(prevstate => {
      return {
        data: (
          <React.Fragment>
            {prevstate.data}
            <tr id={prevstate.nextId}>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </React.Fragment>
        ),

        tab: 1
      };
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="9">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Classrooms
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
                  <tbody>{this.state.data}</tbody>
                </Table>

                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>

                  <Button
                    color="primary"
                    size="sm"
                    onClick={this.handle_add_room}
                  >
                    Add Classroom
                  </Button>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" xl="3">
            <RoomGroupList items={this.state.groupNames} />

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
      </div>
    );
  }
}

export default Rooms;
