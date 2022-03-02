import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };

    }
    onChangeTitle = (event) => {

        this.setState({
            title: event.target.value
        })
    }
    clickAddTodo = () => {
        if (!this.state.title) {
            toast.error("Wow so easy!");
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewtodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.onChangeTitle(event)}
                    />
                    <button className="add" type="submit"
                        onClick={() => this.clickAddTodo()}
                    >Add</button>
                </div>
            </>
        )
    }
}
export default AddTodo