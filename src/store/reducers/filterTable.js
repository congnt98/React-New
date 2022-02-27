import * as types from '../actions/actionTypes'

var initState = {
    name: '',
    status: -1
};
var rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status)
            }

        default:
            return state
    }
}
export default rootReducer