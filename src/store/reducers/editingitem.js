import * as types from '../actions/actionTypes'

var initState = {
    id: '',
    name: '',
    status: false
};
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:

            return action.task

        default:
            return state
    }
}
export default rootReducer