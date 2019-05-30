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
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
  Label
} from "reactstrap";
class Tables extends Component {
=======
  Label,
} from 'reactstrap';

class Rooms extends Component {
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
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
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Capacity</th>
                      <th>Allowance</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PB2001</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB020</td>
                      <td>125</td>
                      <td>15</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB212</td>
                      <td>100</td>
                      <td>15</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB014</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>A110</td>
                      <td>115</td>
                      <td>20</td>
                      <td>Aeroplane Building</td>
                    </tr>
                    <tr>
                      <td>PB2001</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB020</td>
                      <td>125</td>
                      <td>15</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB212</td>
                      <td>100</td>
                      <td>15</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>PB014</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>A110</td>
                      <td>115</td>
                      <td>20</td>
                      <td>Aeroplane Building</td>
                    </tr>
                    <tr>
                      <td>PB014</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>A110</td>
                      <td>115</td>
                      <td>20</td>
                      <td>Aeroplane Building</td>
                    </tr>
                    <tr>
                      <td>PB014</td>
                      <td>120</td>
                      <td>25</td>
                      <td>Petrolium Building</td>
                    </tr>
                    <tr>
                      <td>A110</td>
                      <td>115</td>
                      <td>20</td>
                      <td>Aeroplane Building</td>
                    </tr>
                  </tbody>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button color="primary" size="sm">
                    Add Classroom
                  </Button>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="3">
            <Card>
              <CardHeader>
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
                <i className="fa fa-align-justify" />
                <strong>Classroom Groups</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/listgroup/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
=======
                <i className="fa fa-align-justify"></i><strong>Classroom Groups</strong>
               
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Create New Group Of Classrooms</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
                    <Label htmlFor="nf-email">Email</Label>
                    <Input
                      type="email"
                      id="nf-email"
                      name="nf-email"
                      placeholder="Enter Email.."
                      autoComplete="email"
                    />
=======
                    <Input type="text"  placeholder="Enter A Name For The Classroom GRoup"/>     
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>
                <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban" /> Reset
                </Button>
=======
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Upload Data From File</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
                    <Label htmlFor="nf-email">Email</Label>
                    <Input
                      type="email"
                      id="nf-email"
                      name="nf-email"
                      placeholder="Enter Email.."
                      autoComplete="email"
                    />
                    <FormText className="help-block">
                      Please enter your email
                    </FormText>
=======
                  <Input type="file" size="60"></Input>
                    <FormText className="help-block">Accepted formats are .csv and .xlsx</FormText>
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
<<<<<<< HEAD:src/views/Base/Tables/Tables.js
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>
                <Button type="reset" size="sm" color="danger">
                  <i className="fa fa-ban" /> Reset
                </Button>
=======
              <Button type="submit" size="sm" color="success"><i className="fa fa-upload"></i> Upload</Button>
>>>>>>> 5f2dd6d7f1b57b9a46bb0c7f8f4da94482b75d12:src/views/Base/Rooms/Rooms.js
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rooms;
