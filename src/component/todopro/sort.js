import React from "react"
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
class Sort extends React.Component {


    onSort = (e) => {
        this.props.onSort(e)
    }
    render() {
        var { sort, tasks } = this.props
        if (sort !== '') {
            if (sort === 'az') { tasks.sort((a, b) => a.name.localeCompare(b.name)) }
            if (sort === 'za') { tasks.sort((a, b) => b.name.localeCompare(a.name)) }
            if (sort === 'kh') { tasks.sort((a, b) => b.status - a.status) }
            if (sort === 'a') { tasks.sort((a, b) => a.status - b.status) }
        }
        return (
            <div className="col-md-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span onClick={() => this.onSort('az')} className="dropdown-item" >a-z</span>
                        <span onClick={() => this.onSort('za')} className="dropdown-item" > z-a</span>
                        <span onClick={() => this.onSort('kh')} className="dropdown-item" >kich hoat</span>
                        <span onClick={() => this.onSort('a')} className="dropdown-item" >an</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        tasks: state.task,
        sort: state.sort
    }
}
const mapDispatch = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}
export default connect(mapState, mapDispatch)(Sort)
