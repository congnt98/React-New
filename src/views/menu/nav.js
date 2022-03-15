import React from "react";
import '../../styles/nav.scss'
import {
    Link
} from "react-router-dom";


class Menu extends React.Component {
    render() {
        return (
            <>
                <h1 className="d-flex justify-content-center">React By Nguyễn Thành Công</h1>
                <div className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/todopro">todoPro</Link>
                    {/* <Link to="/user">user</Link>
                    <Link to="/todo">Todo</Link> */}
                    <Link to="/colorpick">colorPick</Link>
                </div>
            </>
        )
    }
}

export default Menu