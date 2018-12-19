
import React, { Component } from 'react';
import TaskList from './TaskList';



//const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      fields: {
        title: '',
        description: ''
      }
    };
  }
  renderTaskLists() {
    const { tasks } = this.props;
    const TASK_STATUSES = [...new Set(tasks.map(item => item.status))];
    //const LEVELS = [...new Set(tasks.map(item => item.level))];
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />;
    });
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  };
  onInputChange = evt => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  onSubmitForm = e => {
    e.preventDefault();
   
    this.props.onCreateTask({
      title: this.state.fields.title,
      description: this.state.fields.description
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      showNewCardForm: false,
      fields: {
        title: '',
        description: ''
      }
    });
  };
  render() {
    return (
      <div className="tasks-list">
        <div className="task-list-header">
          <button className="button button-default" onClick={this.toggleForm}>
            + new Task
          </button>
        </div>
        {this.state.showNewCardForm && (
          <form className="task-list-form" onSubmit={this.onSubmitForm}>
            <input
              className="full-width-input"
              type="text"
              placeholder="Title"
              name='title'
              value={this.state.fields.title}
              onChange={this.onInputChange}
            />
            <input
              className="full-width-input"
              type="text"
              placeholder="Description"
              name='description'
              value={this.state.fields.description}
              onChange={this.onInputChange}
            />
            <button className="button" type="submit">
              Save
            </button>
          </form>
        )}
        <div className="task-lists">{this.renderTaskLists()}</div>
      </div>
    );
  }
}

export default TasksPage;