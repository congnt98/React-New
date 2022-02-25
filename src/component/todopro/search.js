import React from "react"
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }
    Search = () => {
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
                            onClick={() => { this.Search() }}
                            type="button" className="btn btn-primary">Tìm</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
