import React from "react"
class Form extends React.Component {
constructor(props){
    super(props);
    this.state={
            name:'',
            status:false
    }
}
    closeForm=()=>{
        this.props.onAddForm()
    }
    onChange=(event)=>{
        const target = event.target;
        const value=target.value
        const name =target.name
        this.setState({
            [name]:value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.deleteIpnutForm()
        this.closeForm()
        
    }
    deleteIpnutForm=()=>{
        this.setState({
            name:'',
            status:false
        })
    }
    render() {
        var {name,status}=this.state
        return (
           
           <div className="panel">
            <div className=" panel_heading " onClick={()=>this.closeForm()}>
                <h3>Thêm Công Việc</h3>
            </div>
            <div className="panel_body">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label >Tên:</label><br />
                    <input type="text" className="form-control" 
                     name="name"
                     value={name}
                     onChange={(e)=>this.onChange(e)}/><br />
                    <label >Trạng thai:</label><br />
                    <select id="inputState" className="form-control"
                    name="status"
                    value={status}
                    onChange={(e)=>this.onChange(e)}
                    >
                        <option value={false}>Ẩn</option>
                        <option value={true}>Hiện</option>
                    </select>

                </div>
                <div className="panel_form_button">
                    <button type="submit" className="btn btn-warning"
                    >Lưu</button>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.deleteIpnutForm()}}>Hủy</button>
                </div>
            </form>
            </div>
            </div>
            

        )
    }
}

export default Form





// import React from "react"
// class Control extends React.Component {
//     render() {
//         return (
            
//         )
//     }
// }

// export default Control
