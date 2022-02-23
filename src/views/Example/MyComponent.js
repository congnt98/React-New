
import React from 'react';

class MyCompponent extends React.Component {
    hanbName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    hanbClick = (event) => {
        event.preventDefault()
        console.log('ccc', this.state)
    }
    state = {
        Name: ''
    }
    render() {
        return (
            <>

                <h2>HTML Forms</h2>

                <form>
                    <label>
                        <input type="text" name="name"
                            value={this.state.Name}
                            onChange={(event) => this.hanbName(event)}
                        />
                    </label>
                    <input type="submit" value="Submit"
                        onClick={(event) => this.hanbClick(event)} />
                </form>


            </>
        )
    }
}

export default MyCompponent;