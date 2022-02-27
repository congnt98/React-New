
import Item from "./item"
import React from "react"
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChangeFillter = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name]: value
        })
    }
    render() {
        var { filterName, filterStatus } = this.state
        var { tasks, filterTable, keyword } = this.props
        tasks = tasks.filter((str) => {
            return str.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) >= 0;
        });
        tasks = tasks.filter(task => {
            if (filterTable.status === -1) {
                return task
            } else {
                return task.status === (filterTable.status === 0 ? false : true)
            }
        })
        //search
        if (keyword) {
            tasks = tasks.filter(e => {
                return e.name.toLowerCase().indexOf(keyword) !== -1
            })
        }
        var elmTasks = tasks.map((task, index) => {
            return <Item key=
                {task.id}
                index={index}
                task={task}
            />
        })
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><input type="text" className="form-control"
                            name="filterName"
                            value={filterName}
                            onChange={(e) => { this.onChangeFillter(e) }}
                        /></td>
                        <td>
                            <select id="inputState" className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={(e) => { this.onChangeFillter(e) }}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>

            </table>
        )
    }
}
const mapState = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search
    }
}
const mapDispatch = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        }
    }
}
export default connect(mapState, mapDispatch)(Table);