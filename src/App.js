import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPages from './components/TasksPage';
import './App.css';
import { createTask, editTask } from './actions';



class App extends Component {

  // onCreateTask = ({ title, description }) => {

  //   this.props.dispatch({
  //     type: 'CREATE_TASK',
  //     payload: {
  //       title,
  //       description
  //     }
  //   });
  // }

  onCreateTask = ({ title, description}) => {
  this.props.dispatch(createTask({ title, description }));
  }
  
  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  }

  render() {
    return (
      <div className="App">
        <TasksPages
          tasks={this.props.tasks}
          onStatusChange={this.onStatusChange}
          onCreateTask={this.onCreateTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App);
