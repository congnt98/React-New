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
            sort: '',
        };
    }
    onToggoForm = () => {
        this.props.onToggoForm()
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        })
    }
    // onSort = (e) => {
    //     var onSort = e
    //     this.setState({
    //         sort: onSort
    //     })
    // }
    render() {
        var { isDisplayForm } = this.props;
        // if (sort !== '') {
        //     if (sort === 'az') { tasks.sort((a, b) => a.name.localeCompare(b.name)) }
        //     if (sort === 'za') { tasks.sort((a, b) => b.name.localeCompare(a.name)) }
        //     if (sort === 'kh') { tasks.sort((a, b) => b.status - a.status) }
        //     if (sort === 'a') { tasks.sort((a, b) => a.status - b.status) }
        // }
        return (
            <>
                <div className="container">
                    <div className=" row_taitle text-center">
                        <h3>Quản Lý Công Việc</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className={isDisplayForm === true ? "col-md-4" : "col-md-0"}>
                            <Form />
                        </div>
                        <div className={isDisplayForm === true ? "col-md-8" : "col-md-12"}>
                            <div className="" >
                                <h3 className="btn btn-primary mx-1"
                                    onClick={() => this.onToggoForm()}
                                >{isDisplayForm === true ? 'Danh sách Công Việc' : 'Thêm Công việc'}</h3>
                            </div>
                            <div className="row">
                                <Control onSort={this.onSort} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Table />
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
        onClearTask: (task) => {
            dispatch(actions.editTask(task))
        }
    }
}
export default connect(mapState, mapDispatch)(Todopro);