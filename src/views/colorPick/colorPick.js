
import React from 'react';
import '../../styles/colorPick.scss';
import Stsize from './settingSize';
import Stcolor from './settingColor';
import Reset from './reset';
import Resfut from './resuft';

class Colorpick extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red', fontSize: 12 };
    }
    onSetColorActive = (i) => {
        this.setState({
            color: i
        })
    }
    changeSize = (size) => {
        if (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36) {
            this.setState({
                fontSize: this.state.fontSize + size
            })
        }

    }
    onsettingdefault = (value) => {
        if (value) {
            this.setState({
                color: 'red', fontSize: 12
            })
        }
    }
    render() {
        return (
            <>
                <div className="container-fluid container-colorpick">
                    <div className="row">
                        <Stcolor color={this.state.color} payActiveColor={this.onSetColorActive} />
                        <div className="col-6">
                            <Stsize
                                fontsize={this.state.fontSize}
                                changeSize={this.changeSize} />
                            <Reset onsettingdefault={this.onsettingdefault} />
                        </div>

                    </div>
                    <Resfut color={this.state.color} fontsize={this.state.fontSize} />
                </div>
            </>
        );
    }

}

export default Colorpick;
