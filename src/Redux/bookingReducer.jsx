const stateBooking = {
    valueInput : {
        name : '',
        quantity : 0,
        disabled : false
    },
    danhSachGheDangDat : [],
    valueConfirm : true,
    nameShow: '',
    quantityShow: 0,
    danhSachGheShow : [],
}

export const bookingReducer = (state = stateBooking, action ) => {
    switch(action.type) {
        case "INPUT_CHANGE" : {
            const {name, value} = action.e.target;
            state.valueInput = {...state.valueInput, [name] : value};
            return {...state}
        }
        case "START_SELECT" : {
            state.valueInput = {...state.valueInput, disabled : true};
            return {...state}
        }
        case "DAT_GHE" : {
            let mangMoi = [...state.danhSachGheDangDat];
        
            let index = mangMoi.findIndex((gheDangDat) => (gheDangDat.soGhe === action.ghe.soGhe))

            if (index !== -1) {
                // nếu ghế đc chọn có trong mảng thì sẽ xóa ghế đó ra khỏi mảng
                mangMoi.splice(index, 1)
            } else {
                // nếu ghế đc chọn ko có trong mảng thì sẽ thêm vào mảng
                mangMoi.push(action.ghe)
            }
            // nếu length > quantity ban đầu thì xóa phần tử cuối vừa thêm 
            // => trả về mảng ban đầu = quantity
            if (mangMoi.length > +state.valueInput.quantity) {
                mangMoi.pop();
            } 
            // gán mảng mới vào lại state            
            state.danhSachGheDangDat = mangMoi;
        
            console.log(state.danhSachGheDangDat);

            state.valueConfirm = false;

            return {...state}
        }
        case "CONFIRM_SELECTED" : {
            console.log(action)
            
            let mangMoi = [...state.danhSachGheShow];

            mangMoi = state.danhSachGheDangDat;

            state.nameShow = state.valueInput.name;
            state.quantityShow = state.valueInput.quantity;
            state.danhSachGheShow = mangMoi;

            return {...state}
        }
        default : return {...state}
    }
}