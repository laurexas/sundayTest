import React from "react";
import styled from "styled-components";

const Active = styled.div`
  font-weight: bold;
`;
const Done = styled.div`
  text-decoration: line-through;
`;

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        task: this.props.task
    };
  }
  render() {
    if (this.state.task === null && this.state.task === undefined) {
        return null;
    }

    return (
        <div>
            {
                this.state.task.done === true ?
                <Done>{this.state.task.title}</Done>
                :
                <Active>{this.state.task.title}</Active>
            }
        </div>
    );
  }
}
