import * as types from '../actions/actionTypes'

var initState = false
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGO_FORM:

            return !state
        case types.CLOSE_FORM:

            return false
        case types.OPEN_FORM:

            return true
        default:
            return state
    }
}
export default rootReducer