import React from "react";
import { Component } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Label,
  Input,
  FormText,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Row,
  Container,
  Table,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { Card } from "react-bootstrap";
const JsonData = {
  content: {
    courseGroupNames: [
      "Computer Engineering 1",
      "Computer Engineering 2",
      "Computer Engineering 3",
      "Computer Engineering 4",
      "Telecom Engineering 2"
    ],
    classroosmGroupNames: [
      "Petrolium Building",
      "Alpha Building",
      "Beta Building",
      "Eng Auditorium",
      "The Ultimate Building",
      "Cool Building"
    ],
    dayList: [
      {
        dayName: "Monday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      },
      {
        dayName: "Tuesday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      },
      {
        dayName: "Wednesday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      },
      {
        dayName: "Thursday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      },
      {
        dayName: "Friday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      },
      {
        dayName: "Saturday",
        dayTimeRanges: [
          {
            start: "06:00",
            end: "07:00"
          },
          {
            start: "07:00",
            end: "8:00"
          },
          {
            start: "8:00",
            end: "9:00"
          },
          {
            start: "9:00",
            end: "10:00"
          },
          {
            start: "10:00",
            end: "11:00"
          },
          {
            start: "11:00",
            end: "12:00"
          },
          {
            start: "12:00",
            end: "13:00"
          },
          {
            start: "13:00",
            end: "14:00"
          },
          {
            start: "14:00",
            end: "15:00"
          },
          {
            start: "15:00",
            end: "16:00"
          },
          {
            start: "16:00",
            end: "17:00"
          },
          {
            start: "17:00",
            end: "18:00"
          },
          {
            start: "18:00",
            end: "19:00"
          },
          {
            start: "19:00",
            end: "20:00"
          }
        ]
      }
    ]
  }
};
const sampleUserInput = {
  selectedClassrooms: ["A", "B", "C"],
  selectedCourses: ["1", "2", "3"],
  timeRangesSelections: [
    {
      dayName: "Monday",
      selectedTimeRanges: []
    },
    {
      dayName: "Tuesday",
      selectedTimeRanges: []
    },
    {
      dayName: "Wednesday",
      selectedTimeRanges: []
    },
    {
      dayName: "Thursday",
      selectedTimeRanges: []
    },
    {
      dayName: "Friday",
      selectedTimeRanges: []
    },
    {
      dayName: "Saturday",
      selectedTimeRanges: []
    }
  ]
};

class GetCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JsonData,
      userInput: sampleUserInput,
      isLoading: true
    };
    this.handleRemoveClassroom = this.handleRemoveClassroom.bind(this);
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    this.handleCheckedTimeRange = this.handleCheckedTimeRange.bind(this);
    this.OMOverRmIconStyle = this.OMOverRmIconStyle.bind(this);
    this.OMOutRmIconStyle = this.OMOutRmIconStyle.bind(this);
    this.handleSelectClassroom = this.handleSelectClassroom.bind(this);
    this.handleSelectCourse = this.handleSelectCourse.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: JsonData,
      userInput: sampleUserInput,
      isLoading: false
    });
  }

  handleSelectClassroom(event) {
    let target = event.target;
    this.setState(prevState => {
      if (!prevState.userInput.selectedClassrooms.includes(target.value)) {
        return {
          data: prevState.data,
          userInput: {
            selectedClassrooms: [
              ...prevState.userInput.selectedClassrooms,
              target.value
            ],
            selectedCourses: prevState.userInput.selectedCourses,
            timeRangesSelections: prevState.userInput.timeRangesSelections
          }
        };
      }
    });
  }

  handleSelectCourse(event) {
    let target = event.target;
    this.setState(prevState => {
      if (!prevState.userInput.selectedCourses.includes(target.value)) {
        return {
          data: prevState.data,
          userInput: {
            selectedClassrooms: prevState.userInput.selectedClassrooms,
            selectedCourses: [
              ...prevState.userInput.selectedCourses,
              target.value
            ],
            timeRangesSelections: prevState.userInput.timeRangesSelections
          }
        };
      }
    });
  }

  handleCheckedTimeRange(event) {
    let target = event.target,
      start = target.value,
      end = target.id,
      index;
    if (target.checked) {
      this.setState(prevState => {
        return {
          data: prevState.data,
          userInput: {
            selectedClassrooms: prevState.userInput.selectedClassrooms,
            selectedCourses: prevState.userInput.selectedCourses,
            timeRangesSelections: prevState.userInput.timeRangesSelections.map(
              day => {
                if (day.dayName === target.name) {
                  console.log([
                    ...day.selectedTimeRanges,
                    { start: start, end: end }
                  ]);
                  return {
                    dayName: day.dayName,
                    selectedTimeRanges: [
                      ...day.selectedTimeRanges,
                      { start: start, end: end }
                    ]
                  };
                } else return day;
              }
            )
          }
        };
      });
    }
  }

  handleRemoveClassroom(event) {
    let target = event.target;
    this.setState(prevState => {
      let newSelectedClassrooms = prevState.userInput.selectedClassrooms.filter(
        classroom => classroom !== target.id
      );

      return {
        data: prevState.data,
        userInput: {
          selectedClassrooms: newSelectedClassrooms,
          selectedCourses: prevState.userInput.selectedCourses,
          timeRangesSelections: prevState.userInput.timeRangesSelections
        },
        isLoading: false
      };
    });
  }
  handleRemoveCourse(event) {
    let target = event.target;
    this.setState(prevState => {
      let newSelectedCourses = prevState.userInput.selectedCourses.filter(
        course => course !== target.id
      );

      return {
        data: prevState.data,
        userInput: {
          selectedClassrooms: prevState.userInput.selectedClassrooms,
          selectedCourses: newSelectedCourses,
          timeRangesSelections: prevState.userInput.timeRangesSelections
        },
        isLoading: false
      };
    });
  }
  OMOverRmIconStyle(event) {
    let target = event.target;
    target.className = "fa cui-circle-x text-warning float-right";
  }

  OMOutRmIconStyle(event) {
    let target = event.target;
    target.className = "fa cui-circle-x text-danger float-right";
  }

  render() {
    console.log(this.state.userInput.timeRangesSelections);
    let rmIconStyle = {
      cursor: "pointer",
      animation: "2"
    };

    let classroosmGroupNamesComponent = this.state.data.content.classroosmGroupNames.map(
      classroomName => <option value={classroomName}>{classroomName}</option>
    );
    let courseGroupNamesComponents = this.state.data.content.courseGroupNames.map(
      courseName => <option value={courseName}>{courseName}</option>
    );

    let dayListComponent = this.state.data.content.dayList.map(day => (
      <Col xs="2">
        <Card className="p-4">
          <span className="text-primary text-center">{day.dayName}</span>
          <FormGroup>
            {day.dayTimeRanges.map(range => {
              return (
                <div className="d-flex">
                  <Input
                    onChange={this.handleCheckedTimeRange}
                    type="checkbox"
                    name={`${day.dayName}`}
                    value={`${range.start}`}
                    id={`${range.end}`}
                  />
                  <Label for="exampleTime">
                    {`${range.start} - ${range.end}`}
                  </Label>
                </div>
              );
            })}
          </FormGroup>
        </Card>
      </Col>
    ));
    let selectedClassroomsComponent = this.state.userInput.selectedClassrooms.map(
      classroom => (
        <tr key={classroom}>
          <td> {classroom} </td>
          <td>
            <i
              id={classroom}
              name={classroom}
              className="fa cui-circle-x text-danger float-right"
              onClick={this.handleRemoveClassroom}
              style={rmIconStyle}
              onMouseOver={this.OMOverRmIconStyle}
              onMouseOut={this.OMOutRmIconStyle}
            />
          </td>
        </tr>
      )
    );
    let selectedCoursesComponent = this.state.userInput.selectedCourses.map(
      course => (
        <tr key={course}>
          <td>{course}</td>
          <td>
            <i
              id={course}
              name={course}
              className="fa cui-circle-x text-danger float-right"
              onClick={this.handleRemoveCourse}
              style={rmIconStyle}
              onMouseOver={this.OMOverRmIconStyle}
              onMouseOut={this.OMOutRmIconStyle}
            />
          </td>
        </tr>
      )
    );

    return (
      <Container>
        <Form>
          <Row>
            <Col xs="6">
              <Card className="p-3">
                <FormGroup>
                  <Label for="selectClassroomId">Select Classrooms</Label>
                  <Input
                    type="select"
                    name="select"
                    id="selectClassroomId"
                    onChange={this.handleSelectClassroom}
                  >
                    {classroosmGroupNamesComponent}
                  </Input>
                </FormGroup>

                <div
                  style={{
                    overflowY: "auto",
                    height: "250px"
                  }}
                >
                  <Table striped>
                    <tbody clsssName="d-flex">
                      {selectedClassroomsComponent}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="p-3">
                <FormGroup>
                  <Label for="selectCourseId">Select Courses</Label>
                  <Input
                    type="select"
                    name="select"
                    id="selectCourseId"
                    onChange={this.handleSelectCourse}
                  >
                    {courseGroupNamesComponents}
                  </Input>
                </FormGroup>

                <div
                  style={{
                    overflowY: "auto",
                    height: "250px"
                  }}
                >
                  <Table striped>
                    <tbody clsssName="d-flex">{selectedCoursesComponent}</tbody>
                  </Table>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>{dayListComponent}</Row>
          <Row>
            <Col xs="12">
              <Card className="p-4" style={{ width: "100%" }}>
                <Button className="align-middle bg-success  ">Generate</Button>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default GetCourses;
