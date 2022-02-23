

import React from "react"
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edittask: {}
        }
    }
    // hanbleEdit = (task) => {
    //     this.props.hanbleEdit(this.props.task)
    //     //console.log(task);

    // }
    // onChangeEdit = (event) => {
    //     //console.log(event.target.value);
    //     console.log(event);

    // }
    clickstatus = (e) => {
        // this.props.clickstatus(this.props.e)
        console.log("check click");
    }



    updateStatus = () => {
        alert('check click')
        // console.log(this.props.task.id);
        // this.props.updateStatus(this.props.task.id)
    }
    render() {
        var { task, index, taskEdit } = this.props
        var objempty = Object.keys(taskEdit).length === 0
        // console.log(objempty);
        // console.log(taskEdit);
        return (
            <tr>
                {objempty === true ?
                    <>
                        <td>{index + 1}</td>
                        <td >
                            <span onChange={(event) => this.onChangeEdit(event)} value={task.name}>{task.name}</span>
                        </td>
                        <td >
                            <span className={task.status === true ? 'text-danger' : 'text-success'}
                                onClick={() => this.updateStatus}
                            >{task.status === true ? 'kích hoạt' : 'Ẩn'}</span>
                        </td>
                    </> :
                    <>
                        <td>{index + 1}</td>
                        <td >
                            <span ><input
                                onSubmit={this.handleSubmit}
                                onChange={(event) => this.onChangeEdit(event)}
                                value={task.name} /> </span>
                        </td>
                        <td >
                            <select id="inputState"

                                onChange={(event) => this.onChangeEdit(event)}
                                className="form-control"
                                name="status">
                                <option value={false}>Ẩn</option>
                                <option value={true}>Hiện</option>
                            </select>
                        </td>
                    </>}

                <td className="text-center">
                    <button className="btn btn-success mx-2" onClick={() => this.hanbleEdit(task)}>{objempty === true ? 'Sửa' : 'Xong'}</button>
                    <button onClick={() => this.deleteItem} className="btn btn-danger">Xóa</button>
                </td>
            </tr >



        )
    }
}

export default Item