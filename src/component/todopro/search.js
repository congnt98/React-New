import React from "react"
class Search extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="nhập tìm kiếm..." />
                    <div className="button-group">
                        <button type="button" className="btn btn-primary">Tìm</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
