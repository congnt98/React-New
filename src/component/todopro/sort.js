import React from "react"
class Sort extends React.Component {


    onSort = (e) => {
        this.props.onSort(e)
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span onClick={() => this.onSort('az')} className="dropdown-item" >a-z</span>
                        <span onClick={() => this.onSort('za')} className="dropdown-item" > z-a</span>
                        <span onClick={() => this.onSort('kh')} className="dropdown-item" >kich hoat</span>
                        <span onClick={() => this.onSort('a')} className="dropdown-item" >an</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort
