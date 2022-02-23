import React from "react"
import "../../styles/todopro.scss"
import Form from "../../component/todopro/form";
import Control from "../../component/todopro/control";
import Table from "../../component/todopro/table";

class Todopro extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            tasks: [],
            taskEdit: {},
            isDisplayForm: false
        };

    }
    componentWillUnmount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks: tasks

            })
        }
    }


    id = () => {
        return Math.floor(Math.random() * 1000000);
    }
    openForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    onAddForm = () => {
        this.openForm()
    }
    onSubmit = (e) => {
        var { tasks } = this.state
        var task = {
            id: this.id(),
            name: e.name,
            status: e.status === 'true' ? true : false
        }
        this.setState({
            tasks: [...this.state.tasks, task]
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    hanbleEdit = (e) => {
        this.setState({
            taskEdit: e
        })
        // var { taskEdit, tasks } = this.state
        // var objempty = Object.keys(taskEdit).length === 0
        // if (objempty === false && e.id === tasks.id) {
        //     var updateArray = [...tasks]
        //     var objId = updateArray.findIndex((obj) => obj.id === e.id)
        //     updateArray[objId].name = taskEdit.name
        //     updateArray[objId].status = taskEdit.status

        //     this.setState({
        //         tasks: updateArray,
        //         taskEdit: {}
        //     })
        // }

    }
    clickstatus = () => {
        alert('click')
    }

    updateStatus = (id) => {
        console.log(id);

    }
    render() {
        var { tasks, isDisplayForm, taskEdit } = this.state

        var checkForm = isDisplayForm === true ? <Form onSubmit={this.onSubmit} onAddForm={this.onAddForm} /> : ''
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
                                    onClick={() => this.openForm()}
                                >{isDisplayForm === true ? 'Danh sách Công Việc' : 'Thêm Công việc'}</h3>
                            </div>
                            <div className="row">
                                <Control />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Table taskEdit={taskEdit}
                                        updateStatus={this.updateStatus}
                                        tasks={tasks}
                                        //clickstatus={this.clickstatus}
                                        hanbleEdit={this.hanbleEdit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div className="container">
                    <div className="row_taitle text-center">
                        <h3>Quản Lý Công Việc</h3>
                        <hr />
                    </div>
                    <button className="btn btn-primary">Thêm Công Việc</button>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group mt-3">
                                <input type="text" className="form-control" placeholder="nhập tìm kiếm..." />
                                <div className="button-group">
                                    <button type="button" className="btn btn-primary">Tìm</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="dropdown mt-3">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sắp Xếp
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">A-Z</a>
                                    <a className="dropdown-item" href="#">Z-A</a>
                                    <a className="divider">
                                        <hr />
                                    </a>
                                    <a className="dropdown-item" href="#">Trạng Thái Kích Hoạt </a>
                                    <a className="dropdown-item" href="#">Trạng Thái ẨN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" row mt-3">
                        <div className="col">
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
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}

export default Todopro;