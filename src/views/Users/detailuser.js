import React from "react";

import { withRouter } from "./withrouter";

import axios from 'axios';

// const withRouter = WrappedComponent => props => {
//     const params = useParams();

//     // etc... other react-router-dom v6 hooks
//     return (
//         <WrappedComponent
//             {...props}
//             params={params}
//         // etc...
//         />
//     );
// };

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
                <h1>Hello ccc:</h1>
                {isEmptyObj === false &&
                    <>
                        <div>
                            user name:{user.first_name} -{user.last_name}
                        </div>
                        <div>
                            user email:{user.email}
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

            </>
        )
    }
}


export default withRouter(Detailuser)