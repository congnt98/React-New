import * as types from '../actions/actionTypes'


var id = () => {
    return Math.floor(Math.random() * 1000000);
}
var data = JSON.parse(localStorage.getItem('tasks'))

var initState = data ? data : []
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: id,
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.UPDATE_STATUS_TASK:
            console.log(action);
            var id = action.id
            var index = state.findIndex(x => x.id === id);
            // if (tasks[index].status === true) {
            //     tasks[index].status = false
            // }
            // else {
            //     tasks[index].status = true
            // }
            state[index].status = !state[index].status
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];

        default:
            return state;
    }
}
export default rootReducer