import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPages from './components/TasksPage';
import './App.css';
import { createTask } from './actions';



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

  render() {
    return (
      <div className="App">
        <TasksPages
          tasks={this.props.tasks}
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
