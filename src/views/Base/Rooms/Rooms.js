import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, ListGroup, ListGroupItem } from 'reactstrap';
import {
  CardFooter,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

class Rooms extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="9">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Classrooms
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
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB020</td>
                    <td>125</td>
                    <td>15</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB212</td>
                    <td>100</td>
                    <td>15</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB014</td>
                    <td>120</td>
                    <td>25</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>A110</td>
                    <td>115</td>
                    <td>20</td>
                    <td>
                      Aeroplane Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB2001</td>
                    <td>120</td>
                    <td>25</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB020</td>
                    <td>125</td>
                    <td>15</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB212</td>
                    <td>100</td>
                    <td>15</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB014</td>
                    <td>120</td>
                    <td>25</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>A110</td>
                    <td>115</td>
                    <td>20</td>
                    <td>
                      Aeroplane Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB014</td>
                    <td>120</td>
                    <td>25</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>A110</td>
                    <td>115</td>
                    <td>20</td>
                    <td>
                      Aeroplane Building
                    </td>
                  </tr>
                  <tr>
                    <td>PB014</td>
                    <td>120</td>
                    <td>25</td>
                    <td>
                      Petrolium Building
                    </td>
                  </tr>
                  <tr>
                    <td>A110</td>
                    <td>115</td>
                    <td>20</td>
                    <td>
                      Aeroplane Building
                    </td>
                  </tr>
                  </tbody>
                </Table>
                
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
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
                  
                  
                  <Button color="primary" size="sm">Add Classroom</Button>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="3">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Classroom Groups</strong>
               
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
                    <Input type="text"  placeholder="Enter A Name For The Classroom GRoup"/>     
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i><strong>Upload Data From File</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                  <Input type="file" size="60"></Input>
                    <FormText className="help-block">Accepted formats are .csv and .xlsx</FormText>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
              <Button type="submit" size="sm" color="success"><i className="fa fa-upload"></i> Upload</Button>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>

      
      </div>

    );
  }
}

export default Rooms;
