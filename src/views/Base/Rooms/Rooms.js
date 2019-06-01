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
  Label
} from "reactstrap";


const data  = [
  {
    group: "Engineering Classrooms",
    rooms: [{
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "Petroleum"
    },
    {
      name: "PB 021",
      capacity: 120,
      allowance: 20,
      building: "Petroleum"
    },
    {
      name: "PB 022",
      capacity: 120,
      allowance: 20,
      building: "Petroleum"
    },
    {
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "Petroleum"
    },
    {
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "Petroleum"
    }]
  },
  {
    group: "College of Science Classrooms",
    rooms: [{
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "COS"
    },
    {
      name: "PB 021",
      capacity: 120,
      allowance: 20,
      building: "COS"
    },
    {
      name: "PB 022",
      capacity: 120,
      allowance: 20,
      building: "COS"
    },
    {
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "COS"
    },
    {
      name: "PB 020",
      capacity: 120,
      allowance: 20,
      building: "COS"
    }]
  }
  
]



class RoomGroupList extends Component{
  constructor(props){
    super(props)

    this.state = {
      //count: len(props.items.length)
    }
    
  }

  render(){
    let styles = {
      margin: '0px',
      marginLeft: '30%',
    };

    let room_groups = this.props.items.map(item => <ListGroupItem key={item.uniqueId}>{item.group}<i className="fa fa-arrow-right" style={styles} /></ListGroupItem>)
   
    return (
      <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Classroom Groups</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {room_groups}
                </ListGroup>
              </CardBody>
              <CardFooter>
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
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                  <Button type="submit" size="sm" color="success" style={styles}>
                  <i className="fa fa-plus" /> New
                </Button>
                </Pagination>
                
                </CardFooter>
            </Card>

            
    )
  }
}
class Rooms extends Component {
  constructor(props){
    super(props)

    this.handle_add_room = this.handle_add_room.bind(this)

    let room_components = data[0].rooms.map(item => ( <tr>
      <td>{item.name}</td>
      <td>{item.capacity}</td>
      <td>{item.allowance}</td>
      <td>{item.building}</td>
    </tr>))

    this.state = {
      data: room_components,
      tab: 1
    }
  }

  handle_add_room =  () => {
    this.setState(prevstate =>{
      return {
        data: <div>{prevstate.data}
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </div>,
        tab:1
      };
    })
  }

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
                <Table responsive striped contentEditable='true'>
                  <thead contentEditable = 'false'>
                    <tr>
                      <th >Name</th>
                      <th>Capacity</th>
                      <th>Allowance</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data}
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
                
                  <Button color="primary" size="sm" onClick ={this.handle_add_room}>
                    Add Classroom
                  </Button>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="3">
          <RoomGroupList items={data}></RoomGroupList>
         
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Upload Data From File</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <Input type="file" size="60" />
                    <FormText className="help-block">
                      Accepted formats are .csv and .xlsx
                    </FormText>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success">
                  <i className="fa fa-upload" /> Upload
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rooms;
