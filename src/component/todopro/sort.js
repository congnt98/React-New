import React from "react"
class Sort extends React.Component {



    render() {
        return (
            <div className="col-md-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item" href="">a-z</span>
                        <span className="dropdown-item" href=""> z-a</span>
                        <span className="dropdown-item" href="">kich hoat</span>
                        <span className="dropdown-item" href="">an</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort
