import * as types from '../actions/actionTypes'

var initState = ''
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword

        default:
            return state
    }
}
export default rootReducer