import React from "react"
import "../../styles/todopro.scss"
import Form from "../../component/todopro/form";
import Control from "../../component/todopro/control";
import Table from "../../component/todopro/table";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Todopro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTask: {},
            filter: {
                name: '',
                status: -1
            },
            sort: '',
            keyword: ''
        };
    }


    openForm = () => {
        this.setState({
            isDisplayForm: true,
        })
    }
    setDefaultForm = () => {
        this.setState({
            isDisplayForm: false,
            editTask: {}
        })
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }
    onAddForm = () => {
        // this.setState({
        //     isDisplayForm: !this.state.isDisplayForm,
        //     editTask: {}
        // })
        this.props.onToggoForm()
    }

    // onUpdateStatus = (id) => {
    //     let { tasks } = this.state
    //     var index = tasks.findIndex(x => x.id === id);
    //     // if (tasks[index].status === true) {
    //     //     tasks[index].status = false
    //     // }
    //     // else {
    //     //     tasks[index].status = true
    //     // }
    //     tasks[index].status = !tasks[index].status
    //     this.setState({
    //         tasks: tasks
    //     })
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }
    onDeleteTask = (id) => {
        let { tasks } = this.state
        const curentTasks = tasks.filter(x => x.id !== id);
        this.setState({
            tasks: curentTasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.onCloseForm()

    }
    editTask = (id) => {
        let { tasks } = this.state
        var index = tasks.findIndex(x => x.id === id);
        var Task = tasks[index]
        this.setState({
            editTask: Task
        })
        this.openForm()
    }
    onFilter = (filterName, filterStatus) => {
        // console.log(filterName, filterStatus);
        filterStatus = (parseInt(filterStatus))
        //console.log();filterStatus

        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        })
    }
    onSort = (e) => {
        var onSort = e
        this.setState({
            sort: onSort
        })
    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    render() {
        var { editTask, filter, sort, keyword } = this.state
        var { isDisplayForm } = this.props;
        // console.log(sort);
        // var filterName = tasks.filter((str) => {
        //     return str.name.toLowerCase().indexOf(filter.name.toLowerCase()) >= 0;
        // });
        // tasks = filterName
        // var filterstatus = tasks.filter(task => {
        //     if (filter.status === -1) {
        //         return task
        //     } else {
        //         return task.status === (filter.status === 0 ? false : true)
        //     }
        // })
        // // console.log(filterstatus);
        // tasks = filterstatus
        // //lọc tìm kiếm trong form tương tự
        // // if (filter) {
        // //     if (filter.name) {
        // //         var tasks = tasks.filter(e => {
        // //             return e.name.toLowerCase().indexOf(filter.name) !== -1
        // //         })
        // //     }
        // // }
        // if (sort !== '') {
        //     if (sort === 'az') { tasks.sort((a, b) => a.name.localeCompare(b.name)) }
        //     if (sort === 'za') { tasks.sort((a, b) => b.name.localeCompare(a.name)) }
        //     if (sort === 'kh') { tasks.sort((a, b) => b.status - a.status) }
        //     if (sort === 'a') { tasks.sort((a, b) => a.status - b.status) }
        // }
        // if (keyword !== '') {
        //     tasks = tasks.filter((str) => {
        //         return str.name.toLowerCase().indexOf(keyword) >= 0;
        //     });
        // }
        var checkForm = isDisplayForm === true ? <Form openForm={this.openForm} editTask={editTask} /> : ''
        return (
            <>
                <div className="container">
                    <div className=" row_taitle text-center">
                        <h3>Quản Lý Công Việc</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className={isDisplayForm === true ? "col-md-4" : "col-md-0"}>
                            {checkForm}
                        </div>
                        <div className={isDisplayForm === true ? "col-md-8" : "col-md-12"}>
                            <div className="" >
                                <h3 className="btn btn-primary mx-1"
                                    onClick={() => this.onAddForm()}
                                >{isDisplayForm === true ? 'Danh sách Công Việc' : 'Thêm Công việc'}</h3>
                            </div>
                            <div className="row">
                                <Control onSort={this.onSort} onSearch={this.onSearch} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Table
                                        onDeleteTask={this.onDeleteTask}
                                        editTask={this.editTask}
                                        onFilter={this.onFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapState = (state) => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}
const mapDispatch = (dispatch, props) => {
    return {
        onToggoForm: () => {
            dispatch(actions.toggoForm())
        },

    }
}
export default connect(mapState, mapDispatch)(Todopro);