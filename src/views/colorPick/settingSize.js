
import React from 'react';


class Stsize extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    changeSize = (value) => {
        this.props.changeSize(value)
    }

    render() {
        return (
            <>
                <div>
                    <h1>Size:{this.props.fontsize}</h1>
                    <button onClick={() => this.changeSize(-2)} type="button" className="btn btn-success btn-lg btn_insize">giảm</button>
                    <button onClick={() => this.changeSize(+2)} type="button" className="btn btn-success btn-lg">Tăng</button>
                </div>
            </>
        );
    }

}

export default Stsize;
