import React, { Component } from "react";
import {
  Ribbon,
  RibbonGroup,
  RibbonGroupItem,
  RibbonButton
} from "react-bootstrap-ribbon";
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import { Tab, Row, Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Tab.Container defaultEventKey="1">
            <Row>
              <Nav>
                <Card>
                  <CardHeader className="container d-flex">
                    <Nav.Item>
                      <Nav.Link eventKey="1">
                        <RibbonButton>
                          <div className="ribbon-icon ">
                            <span className="fa fa-table margin-bottom" />
                          </div>
                          <div>New Table</div>
                        </RibbonButton>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">
                        <RibbonButton>
                          <div className="ribbon-icon">
                            <span className="fa fa-file-o" />
                          </div>
                          <div>Open Existing</div>
                        </RibbonButton>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="3">
                        <RibbonButton>
                          <div className="ribbon-icon">
                            <span className="fa fa-upload" />
                          </div>
                          <div>Upload Table</div>
                        </RibbonButton>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">
                        <RibbonButton>
                          <div className="ribbon-icon">
                            <span className="fa fa-book" />
                          </div>
                          <div>Quick Tutorial</div>
                        </RibbonButton>
                      </Nav.Link>
                    </Nav.Item>
                  </CardHeader>
                </Card>
              </Nav>
            </Row>

            <Row>
              <Tab.Content>
                <Tab.Pane eventKey="1">1</Tab.Pane>
                <Tab.Pane eventKey="2">2</Tab.Pane>
                <Tab.Pane eventKey="3">3</Tab.Pane>
                <Tab.Pane eventKey="4">4</Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default App;
