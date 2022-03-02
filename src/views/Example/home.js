import React from "react";
import Color from "../HOC/color";


class Home extends React.Component {

    render() {
        return (
            <>
                <h1 mt-2 style={{ textAlign: 'center', marginTop: '30px' }}>Profile</h1>
            </>
        )
    }
}

export default Color(Home)


