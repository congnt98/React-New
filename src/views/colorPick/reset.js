
import React from 'react';


class Reset extends React.Component {
    clickreset = () => {
        this.props.onsettingdefault(true)
    }
    render() {
        return (
            <>
                <button type="button" className="btn btn-primary btn-lg"
                    onClick={() => this.clickreset()}
                >reset</button>
            </>
        );
    }

}

export default Reset;
