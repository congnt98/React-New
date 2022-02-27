
import React from "react"
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Item extends React.Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id)
        this.props.onCloseForm()
    }
    onEditTask = () => {
        this.props.onOpenForm()
        this.props.onEditTask(this.props.task)
    }
    render() {
        var { task, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td >
                    <span >{task.name}</span>
                </td>
                <td >
                    <span className={task.status === true ? 'text-danger' : 'text-success'}
                        onClick={() => this.onUpdateStatus()}
                    >{task.status === true ? 'kích hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-success mx-2"
                        onClick={() => this.onEditTask()}
                    >Sửa</button>
                    <button className="btn btn-danger"
                        onClick={() => this.onDeleteTask()}
                    >Xóa</button>
                </td>
            </tr >



        )
    }
}

const mapState = (state) => {
    return {

    }
}
const mapDispatch = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    }
}
export default connect(mapState, mapDispatch)(Item);