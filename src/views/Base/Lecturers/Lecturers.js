import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { Button, Table, ListGroup, ListGroupItem } from 'reactstrap';
import {
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';

class Lecturers extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="9">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Lecturers
            </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Name</th>
                  <th>ID Number</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Office Number</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>

                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>

                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
                </tr>

                <tr>
                  <td>Mr.</td>
                  <td>B . Kommey</td>
                  <td>156516</td>
                  <td>Computer Eng</td>
                  <td>bkommey@gmail.com</td>
                  <td>A205</td>
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
              <div className="card-header-actions">
                <a href="https://reactstrap.github.io/components/listgroup/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
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
              <strong>Create New Set of Classrooms</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">Email</Label>
                  <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                  
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <strong>Upload From File</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">Email</Label>
                  <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                  <FormText className="help-block">Please enter your email</FormText>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>
        </Col>
        
      </Row>
    </div>
    );
  }
}

export default Lecturers;
