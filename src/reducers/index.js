import { uniqueId } from '../actions'
const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'store, actions, reducers,,,',
    status: 'In Progress',
    level: 'easy'
  },
  {
    id: uniqueId(),
    title: 'Learn React',
    description: 'local state props',
    status: 'Completed',
    level: 'medium'
  },
  {
    id: uniqueId(),
    title: 'Learn Router',
    description: 'Router, NavLink..',
    status: 'Unstarted',
    level: 'hard'
  },
  {
    id: uniqueId(),
    title: 'Learn Tableau',
    description: 'BI..',
    status: 'In Progress',
    level: 'hard'
  },
  {
    id: uniqueId(),
    title: 'Learn Silverlight',
    description: 'BI..',
    status: 'Cancelled',
    level: 'hard'
  },
  {
    id: uniqueId(),
    title: 'Learn SSMS',
    description: 'BI..',
    status: 'Cancelled',
    level: 'hard'
  }
]

export default function taskReducer(state = { tasks: mockTasks }, action) {
  if (action.type === 'CREATE_TASK') {
    console.log(action.payload);
     return { tasks: state.tasks.concat(action.payload)}
    //return { tasks: [...state.tasks], action.payload }
  }
  return state
}