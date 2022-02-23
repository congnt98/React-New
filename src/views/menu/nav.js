import React from "react";
import '../../styles/nav.scss'
import {
    Link
} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">Nguyễn Thành Công</div>
                <div className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/todo">Todo</Link>
                    <Link to="/todopro">todoPro</Link>
                    <Link to="/user">user</Link>
                    <Link to="/colorpick">colorPick</Link>
                </div>
            </>
        )
    }
}

export default Menu