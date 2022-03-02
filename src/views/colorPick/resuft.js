
import React from 'react';


class Resfut extends React.Component {
    setStyle = () => {
        return {
            color: this.props.color,
            fontsize: this.props.fontsize,

        }
    }
    render() {
        return (
            <>
                <div>Color: {this.props.color}-Frontsize:{this.props.fontsize}</div>
                <div className="content" style={this.setStyle()}>content</div>
            </>
        );
    }

}

export default Resfut;
