import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import { Button, Input, ButtonGroup } from "reactstrap";
import axios from "axios";

const JSONData = [
  {
    day: "Monday",
    room: "A110",
    course: "COE 55",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "08:00-10:00"
  },
  {
    day: "Tuesday",
    room: "A110",
    course: "COE 55",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "16:00-15:00"
  },
  {
    day: "Wednesday",
    room: "A110",
    course: "COE 55",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "08:00-10:00"
  },
  {
    day: "Thursday",
    room: "A101",
    course: "COE 555",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "19:00-20:00"
  },
  {
    day: "Saturday",
    room: "A110",
    course: "COE 515",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "06:00-07:00"
  },
  {
    day: "Friday",
    room: "B188",
    course: "COE 575",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "08:00-10:00"
  },
  {
    day: "Monday",
    room: "A510",
    course: "COE 575",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "10:00-11:00"
  },
  {
    day: "Monday",
    room: "A910",
    course: "COE 55",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "08:00-09:00"
  },
  {
    day: "Saturday",
    room: "A100",
    course: "COE 55",
    section: "Geomatic 1",
    Lecturer: "P. Abaka",
    time: "10:00-11:00"
  }
];

class GeneralTimetable extends Component {
  constructor() {
    super();
    this.state = {
      data: JSONData
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/table").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  render() {
    let days = [];
    let timeSlote = [];
    let roomsTest = [];
    let newlist = this.state.data.map(item => {
      if (!days.includes(item.day)) {
        days = [...days, item.day];
      }
    });
    let timeSl = this.state.data.map(time => {
      if (!timeSlote.includes(time.time)) {
        timeSlote = [...timeSlote, time.time];
      }
    });
    let rooms = this.state.data.map(room => {
      if (!roomsTest.includes(room.room)) {
        roomsTest = [...roomsTest, room.room];
      }
    });

    console.log(days);
    console.log(timeSlote);
    console.log(roomsTest);
    let tableHeads = timeSlote.map(time => <th>{time}</th>);
    let tableBody = roomsTest.map(room => {
      let mylist = timeSlote.map(tSlote => {
        let d = this.state.data.map(item => {
          if (item.day == day && item.time == tSlote && item.room == room)
            return <td>{`${item.course} ${item.section} ${item.Lecturer}`}</td>;
          else return <td />;
        });

        return (
          <React.Fragment>
            <td>{room}</td>
            <td>{d}</td>
          </React.Fragment>
        );
      });
      return mylist;
    });

    let daytables = days.map(day => {
      return (
        <Row>
          <Col xs="12">
            <Card
              style={{
                overflowX: "auto",
                width: "95%",
                margin: "20px"
              }}
            >
              <CardHeader>{day}</CardHeader>
              <CardBody>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Period</th>
                      {tableHeads}
                    </tr>
                  </thead>
                  <tbody>{tableBody}</tbody>
                </Table>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      );
    });
    return <div className="animated fadeIn">{daytables}</div>;
  }
}

export default GeneralTimetable;
