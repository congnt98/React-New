import React from "react";
import Color from "../HOC/color";

class Home extends React.Component {

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Hello Home</h1>
            </>
        )
    }
}

export default Color(Home)


