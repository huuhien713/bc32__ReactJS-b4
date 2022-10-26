import React, { Component } from 'react';

import { connect } from 'react-redux';

class TableInfo extends Component {
    render() {  
        return (
            <div>
                <div className="text-center">
                    <button onClick={() => {this.props.handleConfirm()}} disabled={this.props.valueConfirm} className="btn btn-light text-dark rounded fs-5 fw-semibold my-4">Confirm Selection</button>
                </div>
                <table className='table text-center bg-light border border-dark border-2 mt-4'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number Of Seats</th>
                            <th>Seats</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.nameShow}</td>
                            <td>{this.props.quantityShow}</td>
                            <td>{this.props.danhSachGheShow.reduce((result, item) => {
                                    return result += item.soGhe + ', '
                                }, '')}</td>
                            <td>
                                {(this.props.danhSachGheShow.reduce((result, item) => {
                                    return result += item.gia
                                }, 0)).toLocaleString()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        valueConfirm : state.bookingReducer.valueConfirm,
        nameShow : state.bookingReducer.nameShow,
        quantityShow : state.bookingReducer.quantityShow,
        danhSachGheShow : state.bookingReducer.danhSachGheShow,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleConfirm : () => {
            dispatch({
                type : "CONFIRM_SELECTED",
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableInfo)
