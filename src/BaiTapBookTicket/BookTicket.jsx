import React, { Component } from "react";
import GheList from "./GheList";
import data from "./data.json";

class BookTicket extends Component {
    renderTicket = () => {
        return (
            data.map((hangGhe, index) => {
                return (
                    <div className="d-flex align-items-center text-center" key={index}>
                        <strong className="d-inline-block me-5" style={{width:"35px"}}>{hangGhe.hang}</strong>
                        <GheList hangGhe={hangGhe} />
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <form>
                {this.renderTicket()}
                <div className="w-100 bg-warning text-dark text-center py-2 my-3 fs-4 fw-bold" style={{letterSpacing: "8px", wordSpacing : "10px" ,height : "70px", lineHeight: "50px"}}>
                    SCREEN THIS WAY
                </div>
            </form>
        );
    }
}

export default BookTicket;
