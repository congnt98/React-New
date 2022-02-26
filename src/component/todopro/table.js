
import Item from "./item"
import React from "react"
import { connect } from 'react-redux'
// import Itemedit from "./itemedit"
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
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }

    render() {
        var { filterName, filterStatus } = this.state
        var { tasks } = this.props
        // var objempty = Object.keys(taskEdit).length === 0
        var elmTasks = tasks.map((task, index) => {
            return <Item key=
                {task.id}
                index={index}
                task={task}
                onDeleteTask={this.props.onDeleteTask}
                editTask={this.props.editTask}
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
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, null)(Table)