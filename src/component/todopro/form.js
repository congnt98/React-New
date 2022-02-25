import React from "react"
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }
    componentDidMount() {
        let obj = this.props.editTask
        var checkObj = Object.keys(obj).length === 0 && obj.constructor === Object
        if (!checkObj) {
            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.editTask !== prevProps.editTask) {

            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status,
            })
        }
    }
    closeForm = () => {
        this.props.onCloseForm()
    }
    onChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.deleteIpnutForm()

    }
    deleteIpnutForm = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    render() {
        var { name, status, id } = this.state
        var yes = true
        var no = false
        return (
            <>
                <div className="panel">
                    <div className=" panel_heading " onClick={() => this.closeForm()}>
                        <h3>{id !== '' ? 'Sửa Công Việc' : 'Thêm công việc'}</h3>
                    </div>
                    <div className="panel_body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label >Tên:</label><br />
                                <input type="text" className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={(e) => this.onChange(e)} /><br />
                                <label >Trạng thai:</label><br />
                                <select id="inputState" className="form-control"
                                    name="status"
                                    value={status}
                                    onChange={(e) => this.onChange(e)}
                                >
                                    <option value={no}>Ẩn</option>
                                    <option value={yes}>Kích hoạt</option>
                                </select>
                            </div>
                            <div className="panel_form_button">
                                <button type="submit" className="btn btn-warning"
                                >Lưu</button>
                                <button type="button" className="btn btn-danger" onClick={() => { this.deleteIpnutForm() }}>Hủy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Form


