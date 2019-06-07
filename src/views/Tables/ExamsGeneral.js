import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
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

class ExamsGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTabs = this.toggleTabs.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.state = {
      tab: {
        activeTab: "1"
      },

      cellStyling: {
        border: "none",
        width: "100%",
        textAlign: "center",
        outline: "none",
        pointerEvents: "none",
        overflow: "hidden",
        resize: "none"
      },
      saveBtn: "d-none",
      editBtn: "d-inline"
    };
  }

  toggleTabs(tab) {
    if (this.state.tab.activeTab !== tab) {
      this.setState(
        prev =>
          (prev.tab = {
            activeTab: tab
          })
      );
    }
  }

  editHandler = () => {
    this.setState(prevState => {
      prevState.cellStyling = {
        border: "none",
        width: "100%",
        textAlign: "center",
        overflow: "hidden",
        resize: "none"
      };
      prevState.editBtn = "d-none";
      prevState.saveBtn = "text-success d-inline";
      console.log(prevState);
      return prevState;
    });
  };
  saveHandler = () => {
    this.setState(prevState => {
      prevState.cellStyling = {
        border: "none",
        width: "100%",
        textAlign: "center",
        outline: "none",
        pointerEvents: "none",
        overflow: "hidden",
        resize: "none"
      };
      prevState.editBtn = "d-inline";
      prevState.saveBtn = "d-none";
      return prevState;
    });
  };
  printHandler = () => {};

  render() {
    let courseComponents = data.map(item => (
      <tr>
        <th scope="row">
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.code}
          />
        </th>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.courseName}
          />
        </td>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.examiner}
          />
        </td>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.class}
          />
        </td>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.numOfStudent}
          />
        </td>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.roomNum}
          />
        </td>
        <td>
          <textarea
            className="w-responsive"
            type="textarea"
            style={this.state.cellStyling}
            defaultValue={item.toPrint}
          />
        </td>
        <td />
      </tr>
    ));
    return (
      <React.Fragment>
        <div className="ribbon">
          <div className="ribbon-col row-2px-col col-xs-3">
            <div className="ribbon-group">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.tab.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTabs("1");
                    }}
                  >
                    Tools
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.tab.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTabs("2");
                    }}
                  >
                    Formating
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.tab.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggleTabs("3");
                    }}
                  >
                    Alignment
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.tab.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-copy fa-md" />
                        </div>
                        <div>copy</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-paste fa-md" />
                        </div>
                        <div>paste</div>
                      </button>

                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-send-o fa-md" />
                        </div>
                        <div>export</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-download fa-md" />
                        </div>
                        <div>download</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="cui-print" />
                        </div>
                        <div>print</div>
                      </button>
                      <div
                        onClick={this.editHandler}
                        className={this.state.editBtn}
                      >
                        <button
                          type="button"
                          className="btn btn-default btn-line"
                        >
                          <div className="ribbon-icon">
                            <span className="fa fa-edit fa-md" />
                          </div>
                          <div>edit</div>
                        </button>
                      </div>
                      <div
                        onClick={this.saveHandler}
                        className={this.state.saveBtn}
                      >
                        <button
                          type="button"
                          className="btn btn-default btn-line"
                        >
                          <div className="ribbon-icon">
                            <span className="fa fa-save fa-md" />
                          </div>
                          <div>save</div>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons fa-md cui-bold" />
                        </div>
                        <div>bold</div>
                      </button>

                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons fa-md cui-italic" />
                        </div>
                        <div>italic</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons fa-md cui-brush" />
                        </div>
                        <div>color</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons fa-md cui-magnifying-glass" />
                        </div>
                        <div>size</div>
                      </button>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-align-left fa-md" />
                        </div>
                        <div>align left</div>
                      </button>

                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-align-center fa-md" />
                        </div>
                        <div>align center</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-align-right fa-md" />
                        </div>
                        <div>align right</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="fa fa-align-justify fa-md" />
                        </div>
                        <div>justify</div>
                      </button>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            Examination time table
          </CardHeader>
          <CardBody>
            <Table bordered responsive className="text-center">
              <thead>
                <tr>
                  <th colSpan="8">
                    <input
                      className="font-weight-bold"
                      style={this.state.cellStyling}
                      type="text"
                      defaultValue="COLLEGE OF ENGINEERING"
                    />
                  </th>
                </tr>
                <tr>
                  <th colSpan="8">
                    <input
                      className="font-weight-bold"
                      style={this.state.cellStyling}
                      type="text"
                      defaultValue="
                    FINAL EXAMINATION TIMETABLE FOR THE FIRST SEMESTER,
                    2018/2019 ACADEMIC YEAR"
                    />
                  </th>
                </tr>
                <tr>
                  <th colSpan="8">
                    <input
                      className="font-weight-bold"
                      type="text"
                      style={this.state.cellStyling}
                      defaultValue="MONDAY, 7 JANUARY 2019"
                    />
                  </th>
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
                  <th colSpan="8">
                    <input
                      className="font-weight-bold"
                      type="text"
                      style={this.state.cellStyling}
                      defaultValue="Morning Session (8:30 - 11:30)"
                    />
                  </th>
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
      </React.Fragment>
    );
  }
}

export default ExamsGeneral;
