
import React from 'react';


class Stcolor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'blue', 'green', '#eee']
        };
    }
    showColor = (color) => {
        return {
            background: color
        }
    }
    setColor = (color) => {
        this.props.payActiveColor(color)
    }
    render() {
        return (
            <>
                <div className="col-6">
                    <h1>Color Pick</h1>
                    {
                        this.state.colors.map((color, index) => {
                            return (
                                <span key={index}
                                    style={this.showColor(color)}
                                    className={
                                        this.props.color === color ? 'active' : ''
                                    }
                                    onClick={() => this.setColor(color)}
                                ></span>
                            )
                        })
                    }
                </div>
            </>
        );
    }

}

export default Stcolor;
