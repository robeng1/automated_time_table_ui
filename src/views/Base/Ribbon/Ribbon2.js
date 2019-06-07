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

class Ribbon2 extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTabs = this.toggleTabs.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.state = {
      tab: {
        activeTab: "3"
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
    return (
      <React.Fragment>
        <div className="ribbon">
          <div className="ribbon-col row-2px-col col-xs-3">
            <div className="ribbon-group">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.tab.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggleTabs("3");
                    }}
                  >
                    Days
                  </NavLink>
                </NavItem>
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
                          <span className="icons font-2xl cui-calendar fa-md" />
                        </div>

                        <div>Monday</div>
                      </button>

                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons font-2xl cui-calendar fa-md" />{" "}
                        </div>
                        <div>Tuesday</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons font-2xl cui-calendar fa-md" />{" "}
                        </div>
                        <div>Wednesday</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons font-2xl cui-calendar fa-md" />
                        </div>
                        <div>Thursday</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons font-2xl cui-calendar fa-md" />
                        </div>
                        <div>Friday</div>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-line"
                      >
                        <div className="ribbon-icon">
                          <span className="icons font-2xl cui-calendar fa-md" />
                        </div>
                        <div>Saturday</div>
                      </button>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Ribbon2;
