import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
const data = [
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 351",
    courseName: "OBJECT ORIENTED PROG.",
    examiner: "TB. Kommey",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  },
  {
    code: "COE 365",
    courseName: "ROCKET PROG.",
    examiner: "HN. MENSAH",
    class: "ED3-COE",
    numOfStudent: 97,
    roomNum: "PB008/PB012	",
    toPrint: 107
  }
];

const courseComponents = data.map(item => (
  <tr>
    <th scope="row">{item.code}</th>
    <td>{item.courseName}</td>
    <td>{item.examiner}</td>
    <td>{item.class}</td>
    <td>{item.numOfStudent}</td>
    <td>{item.roomNum}</td>
    <td>{item.toPrint}</td>
    <td />
  </tr>
));

class ExamsGeneral extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false)
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray
    });
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify" />
          Examination time table
        </CardHeader>
        <CardBody>
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th colSpan="8">COLLEGE OF ENGINEERING</th>
              </tr>
              <tr>
                <th colSpan="8">
                  FINAL EXAMINATION TIMETABLE FOR THE FIRST SEMESTER, 2018/2019
                  ACADEMIC YEAR
                </th>
              </tr>
              <tr>
                <th colSpan="8">MONDAY, 7 JANUARY 2019</th>
              </tr>
              <tr>
                <th>CODE</th>
                <th>COURSE NAME</th>
                <th>EXAMINER</th>
                <th>CLASS</th>
                <th>NO. OF STDS</th>
                <th>ROOM NO.</th>
                <th>TO PRINT</th>
                <th>INVIGILATORS</th>
              </tr>
              <tr>
                <th colSpan="8">Morning Session (8:30 - 11:30)</th>
              </tr>
            </thead>
            <tbody>{courseComponents}</tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Pagination size="sm">
            <PaginationItem>
              <PaginationLink previous tag="button" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button" />
            </PaginationItem>
          </Pagination>
        </CardFooter>
      </Card>
    );
  }
}

export default ExamsGeneral;
