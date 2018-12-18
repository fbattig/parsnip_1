import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPages from './components/TasksPage';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      <TasksPages tasks={this.props.tasks} />
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
