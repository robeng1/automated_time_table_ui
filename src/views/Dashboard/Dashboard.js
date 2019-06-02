import React, { Component, lazy } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Col, Row } from "reactstrap";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Widget02 from "../Widgets/Widget02";

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
              header="Schedules"
              mainText="50 Schedules"
              icon="fa fa-hourglass"
              color="info"
              footerText="Manage Schedules"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Classrooms"
              mainText="10 Available"
              footerText="Manage Classrooms"
              icon="fa fa-home"
              color="info"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Lecturers"
              mainText="50 Lecturers"
              footerText="Manage Lecturers"
              icon="fa fa-user"
              color="info"
              footer
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header="Courses"
              mainText="80 courses"
              footerText="Manage Courses"
              icon="icon-book-open"
              color="info"
              footer
            />
          </Col>
        </Row>
        <Row className="mt-5 h-100">
          <Col xs="12" sm="6" lg="9">
            <div className="rounded border p-2 bg-white">
              <MyCalendar />
            </div>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <TodoWidget />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
