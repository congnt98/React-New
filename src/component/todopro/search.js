import React from "react"
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }
    onChangeSearch = (e) => {
        let keyword = e.target.value
        this.setState({
            keyword: keyword
        })
    }
    render() {
        let { keyword } = this.state
        return (
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="nhập tìm kiếm..."
                        value={keyword}
                        onChange={(e) => this.onChangeSearch(e)} />
                    <div className="button-group">
                        <button
                            onClick={() => { this.onSearch() }}
                            type="button" className="btn btn-primary">Tìm</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {

    }
}
const mapDispatch = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword))
        }
    }
}
export default connect(mapState, mapDispatch)(Search)
