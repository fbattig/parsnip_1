import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  return (
    <div className='task-list'>
      <div className='task-list-title'>
        {props.status}
      </div>
      
      {props.tasks.map(task => {
        return <Task
          key={task.id}
          task={task}
          statuses={props.statuses}
          onStatusChange ={props.onStatusChange}
        />
      })}
    </div>)
}

export default TaskList;