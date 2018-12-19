
const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'store, actions, reducers,,,',
    status: 'In Progress',
    level: 'easy'
  },
  {
    id: 2,
    title: 'Learn React',
    description: 'local state props',
    status: 'Completed',
    level: 'medium'
  },
  {
    id: 3,
    title: 'Learn Router',
    description: 'Router, NavLink..',
    status: 'Unstarted',
    level: 'hard'
  },
  {
    id: 4,
    title: 'Learn Tableau',
    description: 'BI..',
    status: 'In Progress',
    level: 'hard'
  },
  {
    id: 5,
    title: 'Learn Silverlight',
    description: 'BI..',
    status: 'Cancelled',
    level: 'hard'
  },
  {
    id: 6,
    title: 'Learn SSMS',
    description: 'BI..',
    status: 'Cancelled',
    level: 'hard'
  }
]

export default function taskReducer(state = { tasks: mockTasks }, action) {
  return state
}