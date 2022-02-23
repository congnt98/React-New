

// import React from "react"
// class Itemedit extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             edittask: {}
//         }
//     }
//     hanbleEdit = () => {
//         this.props.hanbleEdit(this.props.task.id)
//     }
//     onChangeEdit = (event) => {
//         //console.log(event.target.value);
//         console.log(event);

//     }
//     render() {
//         var { task, index } = this.props
//         return (
//             <tr>
                // <td>{index + 1}</td>
                // <td >
                //     <span ><input onChange={(event) => this.onChangeEdit(event)} value={task.name} /></span>
                // </td>
                // <td >

                //     <p className={task.status === true ? 'text-danger' : 'text-success'}>{task.status === true ? 'kích hoạt' : 'ẩn'}</p>
                // </td>
//                 <td className="text-center">
//                     <button className="btn btn-success mx-2" onClick={() => this.hanbleEdit(task)}>Xong</button>
//                     <button className="btn btn-danger">Xóa</button>
//                 </td>
//             </tr >



//         )
//     }
// }

// export default Itemedit