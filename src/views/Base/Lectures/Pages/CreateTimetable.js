import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button,Input,
    ButtonGroup,}  from 'reactstrap';
import Widget02 from '../../../Widgets/Widget02'
import CardFooter from 'reactstrap/lib/CardFooter';

class SelectCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const iStyle = {
            marginLeft: "30%",
            marginRight: "30%"
        }

        const cardStyle = {
            width: "100%"
        }

        const buttonStyle = {
           width: "100%"
        }

        return (
   
                <Card style = {cardStyle}>
                    <CardBody>
                    <i className = {this.props.icon} style = {iStyle}></i>
                    </CardBody>
                    <CardFooter>
                    <Button color="primary" size="lg" style={buttonStyle}>{this.props.button}</Button>
                    </CardFooter>
                </Card>

        );
    }
}

class CreateTimetable extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        
        <Col sm="6" md="2">
            <Row>
                <SelectCard icon = "fa fa-home fa-5x" button="Select Classrooms"/>
            </Row>  
            <Row>
                <SelectCard icon = "fa fa-user-friends fa-5x" button="Select Lecturers"/>
            </Row>  
            <Row>
                <SelectCard icon = "fas fa-book-open " button="Select Courses"/>
            </Row>  
            <Row>
                <SelectCard icon = "fa fa-table fa-5x" button="Timetable Template"/>
            </Row>  
        </Col>
        
        
      </div>

    );
  }
}

export default CreateTimetable;
