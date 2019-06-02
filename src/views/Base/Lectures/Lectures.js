import React, { Component } from 'react';
import GeneralTimetable from './Timetables/GeneralTimetable/GeneralTimetable';
import ClassTimetable from './Timetables/ClassTimetable/ClassTimetable';
import Widget04 from '../../Widgets/Widget04'
import { relative } from 'path';
import CreateTimetable from './Pages/CreateTimetable'
import { Card, Button,CardBody, CardFooter,CardHeader, Col, Row, Table } from 'reactstrap';

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
          width: "75%"
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

class Lectures extends Component {
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
         <Col sm="6" md="2">
            <Row>
                <SelectCard icon = "fa fa-table fa-5x" button="Create New Table"/>
            </Row>  
            <Row>
                <SelectCard icon = "fa fa-file-o fa-5x" button="Open Existing Table"/>
            </Row>  
            <Row>
                <SelectCard icon = "fa fa-upload fa-5x " button="Upload Table"/>
            </Row>  
            <Row>
                <SelectCard icon = "fa fa-book fa-5x" button="Quick Tutorial"/>
            </Row>  
        </Col>
      </div>
    );
  }
}

export default Lectures;
