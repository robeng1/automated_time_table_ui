import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import { Button, ButtonGroup } from "reactstrap";

class ClassTimetable extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="20">
            <Card>
              {/* <CardHeader>
               <h1>COMPUTER ENGINEERING (YEAR 1)</h1>
               <ButtonGroup>
                  <Button>COPY</Button>
                  <Button>CSV</Button>
                  <Button>PRINT</Button>
                  <Button>EXPORT</Button>
                  
                </ButtonGroup>
                
              </CardHeader> */}
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8:00 - 9:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>9:00 - 10:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>10:00 - 11:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>11:00 - 12:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>12:00 - 13:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>13:00 - 14:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>14:00 - 15:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                    <tr>
                      <td>15:00 - 16:00</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                      <td>Course Name and Room Name and Lecturer</td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
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
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ClassTimetable;
