import React, { Component } from 'react';
import TasksPages from './components/TasksPage';
import './App.css';

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'store, actions, reducers,,,',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Learn React',
    description: 'local state props',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Learn Router',
    description: 'Router, NavLik..',
    status: 'Unstarted'
  },
  {
    id: 4,
    title: 'Learn Tableau',
    description: 'BI..',
    status: 'Unstarted'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <TasksPages tasks={mockTasks} />
      </div>
    );
  }
}

export default App;
