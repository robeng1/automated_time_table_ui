import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class MiniCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
 
    return (
      <div >
        <Card>
           <CardHeader>
             <h1>Calendar</h1>
           </CardHeader>
           <CardBody>
           <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
           </CardBody>
           <CardFooter>

           </CardFooter>
        </Card>
      </div>
    );
  }
}
export default MiniCalendar;