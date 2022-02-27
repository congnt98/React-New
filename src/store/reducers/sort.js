import * as types from '../actions/actionTypes'

var initState = ''
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SORT:
            console.log(action);
            console.log(state);
            return state

        default:
            return state
    }
}
export default rootReducer