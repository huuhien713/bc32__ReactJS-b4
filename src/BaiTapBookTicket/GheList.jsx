import React, { Component } from "react";
// import GheItem from './GheItem';

import { connect } from "react-redux";
  
class GheList extends Component {
  renderHangGhe = () => {
    const { hangGhe, danhSachGheDangDat } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      if (hangGhe.hang === "") {
        return (
          <div className="mx-2 mb-3" style={{width: "50px" }} key={index}>
            <strong>{ghe.soGhe}</strong>
          </div>
        );
      } else {
        let cssGheDaDat = '';
        let disabled = false;
        // trạng thái ghế đã bị người khác đặt
        if (ghe.daDat) {
          cssGheDaDat = 'gheDaDat';
          disabled = true;
        }
        // xét trạng thái ghế đang đặt
        let cssGheDuocChon = '';
        let indexGheDuocChon = danhSachGheDangDat.findIndex(item => item.soGhe === ghe.soGhe);
        
        if (indexGheDuocChon !== -1) {
          cssGheDuocChon = 'gheDuocChon';
        }
        return (
          <button key={index} onClick={() => {this.props.handleCheck(ghe);}} disabled={disabled} name={ghe.soGhe} 
          className="btnGhe mx-2 my-3" type="button">
            <input
               className="d-inline-block" type="checkBox"/>
              <span className={`ghe ${cssGheDaDat} ${cssGheDuocChon}`} >{ghe.soGhe}</span>
          </button>
        );
      }
    });
  };

  render() {
    return <div className="d-flex align-items-center">{this.renderHangGhe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookingReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheck: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GheList);
