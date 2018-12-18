
import React, { Component } from 'react';
import TaskList from './TaskList';

//const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];



class TasksPage extends Component {

  renderTaskLists() {
    const { tasks } = this.props;
    const TASK_STATUSES = [...new Set(tasks.map(item => item.status))];
    //const LEVELS = [...new Set(tasks.map(item => item.level))];
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />
    });
  }
  render() {
    return (
      <div className='tasks'>
      <div className='task-lists'>
           {this.renderTaskLists()}
        </div>
        </div>
    )
  }
}

export default TasksPage;