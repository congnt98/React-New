import React from "react";
import '../../styles/listTodo.scss'
import AddTodo from "./addTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/color";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            ListTodos: [
                { id: 'todo1', title: 'doing homework' },
                { id: 'todo2', title: 'video calls' },
                { id: 'todo3', title: 'fixs bugs' },
            ],
            edittodo: {

            }
        };

    }
    addNewtodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
        })
        toast.success("Wow so easy!");

    }
    onDeletetodo = (item) => {
        let curentTodo = this.state.ListTodos
        curentTodo = curentTodo.filter(todo => todo.id !== item.id)
        this.setState({
            ListTodos: curentTodo
        })
    }
    clickEdit = (todo) => {
        let { edittodo, ListTodos } = this.state
        let isEmptyObj = Object.keys(edittodo).length === 0;
        if (isEmptyObj === false && edittodo.id === todo.id) {

            var updatedOSArray = [...ListTodos];

            let objIndex = updatedOSArray.findIndex((obj => obj.id === todo.id));

            //Log object to Console.
            //Update object's name property.
            updatedOSArray[objIndex].title = edittodo.title
            this.setState({
                ListTodos: updatedOSArray,
                edittodo: {}
            })
            return;
        }
        this.setState({
            edittodo: todo
        })
    }

    onChangeedit = (event) => {
        var edittodonew = { ...this.state.edittodo }
        edittodonew.title = event.target.value
        this.setState({
            edittodo: edittodonew
        })
    }
    render() {
        var edittodo = this.state.edittodo;
        let ListTodos = this.state.ListTodos;// = let{listTodo} =this.state.ListTodo
        let isEmptyObj = Object.keys(edittodo).length === 0;
        // console.log('check empty', isEmptyObj); check rỗng or không rỗng true:false
        return (
            <>
                <p>
                    List Todo by Nguyễn Thành Công
                </p>
                <div className="Container">
                    <AddTodo addNewtodo={this.addNewtodo} />
                    <div className="content-list-todo">
                        {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => {
                            return (
                                <div className="todo-list" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1}-{item.title}</span>
                                        :
                                        <>
                                            {edittodo.id === item.id ?
                                                < span > {index + 1}-<input
                                                    value={edittodo.title}
                                                    onChange={(event) => this.onChangeedit(event)} /> </span>
                                                :
                                                <span>{index + 1}-{item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.clickEdit(item)}  >
                                        {isEmptyObj === false && edittodo.id === item.id ? 'save' : 'edit'}
                                    </button>
                                    <button className="delete" onClick={() => this.onDeletetodo(item)} >delete</button>

                                </div>
                            )
                        })}

                    </div>
                </div >
            </>
        )
    }
}
export default Color(ListTodo)

