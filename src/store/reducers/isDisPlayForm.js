import * as types from '../actions/actionTypes'

var initState = false
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGO_FORM:

            return !state
        case types.CLOSE_FORM:
            state = false
            return state
        case types.OPEN_FORM:
            state = true
            return state
        default:
            return state
    }
}
export default rootReducer