
import Item from "./item"
import React from "react"
// import Itemedit from "./itemedit"
class Table extends React.Component {

    render() {
        // var taskEdit = this.props.taskEdit
        var { tasks, taskEdit } = this.props
        // var objempty = Object.keys(taskEdit).length === 0
        var elmTasks = tasks.map((task, index) => {
            return <Item key=
                {task.id}
                index={index}
                task={task}
                updateStatus={this.props.updateStatus}
                taskEdit={taskEdit}
                //clickstatufa-stack-1x={this.props.clickstatus}
                hanbleEdit={this.props.hanbleEdit} />
        })
        // var elmTasksEdit = tasks.map((task, index) => {
        //     return <Itemedit key={task.id} index={index} task={task}
        //         hanbleEdit={this.props.hanbleEdit} />
        // })
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
                        <td><input type="text" className="form-control" /></td>
                        <td>
                            <select id="inputState" className="form-control">
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Hiện</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {/* {objempty === true ?

                        elmTasks
                        :
                        elmTasksEdit
                    } */}
                    {elmTasks}
                </tbody>

            </table>
        )
    }
}

export default Table