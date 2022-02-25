import React from "react"
import Search from "./search"
import Sort from "./sort"
class Control extends React.Component {
    render() {
        return (
            <>
                <Search onSearch={this.props.onSearch} />
                <Sort onSort={this.props.onSort} />
            </>
        )
    }
}

export default Control