import React, { Component } from 'react';
import GeneralTimetable from './Timetables/GeneralTimetable/GeneralTimetable';
import ClassTimetable from './Timetables/ClassTimetable/ClassTimetable';

class Forms extends Component {
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
        <GeneralTimetable />
        <ClassTimetable />
      </div>
    );
  }
}

export default Forms;
