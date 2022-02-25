import React from "react"
import "../../styles/todopro.scss"
import Form from "../../component/todopro/form";
import Control from "../../component/todopro/control";
import Table from "../../component/todopro/table";

class Todopro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            editTask: {},
            filter: {
                name: '',
                status: -1
            }
        };
    }
    componentDidMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }
    id = () => {
        return Math.floor(Math.random() * 1000000);
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
        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            editTask: {}
        })
    }
    onSubmit = (e) => {
        var { tasks } = this.state
        if (e.id === '') {
            var task = {
                id: this.id(),
                name: e.name,
                status: e.status === 'true' ? true : false
            }
            // localStorage.setItem('tasks', JSON.stringify(tasks))
            this.setState({
                tasks: [...this.state.tasks, task]
            })
        }
        else {
            var index = tasks.findIndex(x => x.id === e.id)
            tasks[index] = e
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.setDefaultForm()
    }
    onUpdateStatus = (id) => {
        let { tasks } = this.state
        var index = tasks.findIndex(x => x.id === id);
        // if (tasks[index].status === true) {
        //     tasks[index].status = false
        // }
        // else {
        //     tasks[index].status = true
        // }
        tasks[index].status = !tasks[index].status
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
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
    render() {
        var { tasks, editTask, isDisplayForm, filter } = this.state
        //console.log(filter);
        var filterName = tasks.filter((str) => {
            return str.name.toLowerCase().indexOf(filter.name.toLowerCase()) >= 0;
        });
        tasks = filterName
        var filterstatus = tasks.filter(task => {
            if (filter.status === -1) {
                return task
            } else {
                return task.status === (filter.status === 0 ? false : true)
            }
        })
        // console.log(filterstatus);
        tasks = filterstatus
        //lọc tìm kiếm trong form tương tự
        // if (filter) {
        //     if (filter.name) {
        //         var tasks = tasks.filter(e => {
        //             return e.name.toLowerCase().indexOf(filter.name) !== -1
        //         })
        //     }
        // }
        var checkForm = isDisplayForm === true ? <Form onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} openForm={this.openForm} editTask={editTask} /> : ''
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
                                <Control />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Table
                                        tasks={tasks}
                                        onUpdateStatus={this.onUpdateStatus}
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

export default Todopro;