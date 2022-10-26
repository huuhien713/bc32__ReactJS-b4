import React, { Component } from 'react';

import { connect } from 'react-redux';

class InputForm extends Component {
    render() {
        const {name, quantity, disabled} = this.props.valueInput;
        let handleClick = (e) => {
            e.preventDefault();

            if (name === '' || quantity === 0) {
                alert('Vui lòng nhập tên của bạn và số lượng vé cần mua')
            } else {
                this.props.handleClick();
                console.log(disabled);
            }
        }
        return (
            <div className='mb-2'>
                <h3 style={ { color : "#ff9800"}}>
                    Fill The Required Details Below And Select Your Seats
                </h3>
                <form>
                    <div className="row">
                        <div className="col-6 form-group ">
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input disabled={disabled} id='name' className='form-control bg-' type="text" name="name" value={name} onChange={this.props.handleChange} />
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="numberSeat" className='form-label'>Number Of Seats</label>
                            <input disabled={disabled} id='numberSeat' className='form-control' type="number" name="quantity" value={quantity < 0 ? 0 : quantity} onChange={this.props.handleChange}/>
                        </div>  
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 form-group ">
                            <button  onClick={(e) => {handleClick(e)}} className='btn btn-light rounded fs-5 fw-bold px-5'>Start Selecting</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        valueInput : state.bookingReducer.valueInput,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange : (e) => {
            dispatch({
                type : "INPUT_CHANGE",
                e
            })
        },
        handleClick : () => {
            dispatch({
                type : "START_SELECT"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);