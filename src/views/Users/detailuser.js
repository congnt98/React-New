import React from "react";
import { withRouter } from "./withrouter";
import axios from 'axios';
import '../../styles/detailuser.scss'

class Detailuser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let { id } = this.props.with.params;
        //let id = this.props.params
        let res = await axios.get(`https://reqres.in/api/users/${id}`)

        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}

        })

    }
    backUser = () => {
        this.props.with.navigate(`/user`)
    }
    render() {

        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div className="container text-center">
                    <h1>Hello ccc:</h1>
                    {isEmptyObj === false &&
                        <>
                            <div>
                                <span> user name:</span> {user.first_name} -{user.last_name}
                            </div>
                            <div>
                                <span>user email:</span>{user.email}
                            </div>
                            <div>
                                <img src={user.avatar} alt="#" />
                            </div>
                            <div>
                                <button onClick={() => this.backUser()}>
                                    back
                                </button>
                            </div>
                        </>
                    }
                </div>

            </>
        )
    }
}


export default withRouter(Detailuser)