import React, { Component, lazy } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Button,
  CardHeader,
  Col,
  Row,
  Collapse,
  Fade,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import Widget01 from "../Widgets/Widget01";
import Widget02 from "../Widgets/Widget02";
import Widget04 from "../Widgets/Widget04";
import Widgets from "../Widgets/Widgets";
import TodoWidget from "../Widgets/Todo/TodoWidget";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    console.log(new Date(new Date().setHours(new Date().getHours() - 3)));
    const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
    console.log(localizer);
    const myEventsList = [
      {
        id: 0,
        title: "All Day Event very long title",
        allDay: false,
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
      },
      {
        id: 14,
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
      }
    ];

    const MyCalendar = props => (
      <div height={50}>
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          step={60}
          style={{ minHeight: 500 }}
        />
      </div>
    );
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Lecture Timetable"
              mainText="First Semester 2018"
              icon="icon-book-open"
              color="info"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Examinations Timetable"
              mainText="First Semester 2018"
              icon="icon-note"
              color="info"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Mid Terms Timetable"
              mainText="First Semester 2018"
              icon="icon-pencil"
              color="info"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Lecture Timetable"
              mainText="IDL Second Semester 2018/2019"
              icon="icon-book-open"
              color="info"
              footer
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="12" sm="6" lg="9">
            <div className="rounded border p-2 bg-white">
              <MyCalendar />
            </div>
          </Col>

          <Col xs="12" sm="6" lg="3" height="10">
            <TodoWidget />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
