import React from "react";
import axios from "axios";
import '../../styles/list.scss'
import { withRouter } from "./withrouter";

// import { withRouter } from "./withrouter";

// const withRouter = WrappedComponent => props => {
//     const navigate = useNavigate();

//     // etc... other react-router-dom v6 hooks
//     return (
//         <WrappedComponent
//             {...props}
//             navigate={navigate}
//         // etc...
//         />
//     );
// };

class Listuser extends React.Component {
    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1')
    //         .then(res => {
    //             console.log('>>check res', res.data.data);
    //         })
    // }
    state = {
        Listusers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            Listusers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    clickuser = (item) => {
        this.props.with.navigate(`/user/${item.id}`);
    }
    render() {
        let { Listusers } = this.state
        return (
            <div className="container container-user">
                <div className="tittle">
                    felch all list user

                </div>
                <div className="list-content-user">
                    {Listusers && Listusers.length > 0 &&
                        Listusers.map((item, index) => {
                            return (
                                <div className="list-item" key={item.id}
                                    onClick={() => this.clickuser(item)}
                                >
                                    {index + 1}-{item.first_name}-{item.last_name}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(Listuser);