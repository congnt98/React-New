import * as types from '../actions/actionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL

    }
}
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}
export const toggoForm = (task) => {
    return {
        type: types.TOGGO_FORM,

    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM,

    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM,

    }
}
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
}