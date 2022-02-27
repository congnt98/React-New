import * as types from '../actions/actionTypes'

var ranDomId = () => {
    return Math.floor(Math.random() * 1000000);
}
var data = JSON.parse(localStorage.getItem('tasks'))
var initState = data ? data : []
var rootReducer = (state = initState, action) => {
    var id = '';
    var index = -1
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            if (!task.id) {
                task.id = ranDomId()
                state.push(task) // [...state,task]
            } else {
                index = state.findIndex(x => x.id === task.id);
                state[index] = task

            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.UPDATE_STATUS_TASK:
            id = action.id
            index = state.findIndex(x => x.id === id);
            // state[index].status = !state[index].status
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.DELETE_TASK:
            var curentTasks = state.filter(x => x.id !== action.id)
            // var index = state.findIndex(x => x.id === id)
            state = curentTasks
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]


        default:
            return state;
    }
}
export default rootReducer