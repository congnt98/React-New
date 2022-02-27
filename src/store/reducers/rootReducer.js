import { combineReducers } from "redux"
import tasks from './tasks'
import isDisplayForm from './isDisPlayForm'
import editingitem from './editingitem'
import filterTable from './filterTable'
import search from './search'
import sort from './sort'
const rootReducer = combineReducers({
    tasks, isDisplayForm, filterTable, editingitem, search, sort
})
export default rootReducer