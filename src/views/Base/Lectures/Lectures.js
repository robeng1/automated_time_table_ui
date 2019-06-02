import React, { Component } from 'react';
import GeneralTimetable from './Timetables/GeneralTimetable/GeneralTimetable';
import ClassTimetable from './Timetables/ClassTimetable/ClassTimetable';
import Widget04 from '../../Widgets/Widget04'
import {Col, Row } from 'reactstrap';
import { relative } from 'path';
import CreateTimetable from './Pages/CreateTimetable'

class OptionsBar extends Component{
  render(){
    let styles = {
      position:"absolute",
      width:"75%",
      top:"20%",
      right:"7%"
    }
    return (
    <div style= {styles}>

    <Row >
          <Col sm="6" md="3">
            <Widget04 icon="icon-plus" color="success" header="Create" value="100" invert>New Timetable</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-folder" color="info" header="Open" value="100" invert>Existing Timetable</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-cloud-upload" color="warning" header="Upload" value="100" invert>Existing Timetable</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-note" color="primary" header="Quick" value="100" invert>Scheduling Tutorial</Widget04>
          </Col>
          
        </Row>

    </div>)
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
        {/*<OptionsBar/>
        
        <GeneralTimetable />
        <ClassTimetable />*/}
        <CreateTimetable />
      </div>
    );
  }
}

export default Lectures;
