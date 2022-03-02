import * as types from '../actions/actionTypes'

var initState = ''
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SORT:
            return action.sort

        default:
            return state
    }
}
export default rootReducer