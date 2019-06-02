import React, { Component } from "react";
import GeneralTimetable from "./Timetables/GeneralTimetable/GeneralTimetable";
import ClassTimetable from "./Timetables/ClassTimetable/ClassTimetable";
import { relative } from "path";
import CreateTimetable from "./Pages/CreateTimetable";
import OptionsBar from "../../Widgets/OptionsBar/OptionsBar";

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
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    let icons = ["icon-plus", "icon-folder", "icon-cloud-upload", "icon-note"],
      colors = ["success", "info", "warning", "primary"],
      values = ["100", "100", "100", "100", "100"],
      headers = ["Ceate", "Open", "Upload", "Quick"],
      comments = [
        "New Timetable",
        "Existing Timetable",
        "Existing Timetable",
        "Scheduling Tutorial"
      ];
    return (
      <div className="animated fadeIn">
        <OptionsBar
          icons={icons}
          colors={colors}
          values={values}
          comments={comments}
          headers={headers}
        />

        {/*<GeneralTimetable />
        <ClassTimetable />*/}
        {/*<CreateTimetable />*/}
      </div>
    );
  }
}
export default Lectures;
