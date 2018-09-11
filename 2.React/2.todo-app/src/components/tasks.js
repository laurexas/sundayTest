import React from "react";
import styled from "styled-components";
import Task from "./task";

const Total = styled.div`
  padding-top: 10px;
`;

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        total: this.props.tasks.length,
        tasks: this.props.tasks
    };
    this.addTask = this.addTask.bind(this)
  }
  addTask() {
    this.setState({
        tasks: this.state.tasks.concat({title: 'new task', done: false}),
        total: this.props.tasks.length
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addTask}>Add Task</button>
        {
            this.state.tasks.map(function(task, i) {
                return <Task key={i} task={task} />;
            })
        }
        <Total>Total tasks: {this.state.total}</Total>
      </div>
    );
  }
}