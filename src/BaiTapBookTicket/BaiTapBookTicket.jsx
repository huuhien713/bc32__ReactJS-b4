import React, { Component } from 'react'
import InputForm from './InputForm'
import BookTicket from './BookTicket'
import TableInfo from './TableInfo'

export default class BaiTapBookTicket extends Component {
  render() {
    return (
      <div style={ {
        backgroundImage : "url('https://demo.w3layouts.com/demos_new/template_demo/23-03-2018/movie_seat_selection-demo_Free/759053290/web/images/banner.jpg')",
        width : "100%",
        
        backgroundPosition : "center",
        backgroundSize : "cover"
      }}>
        <div className="container p-2">
            <h1 className='text-center text-light fw-bold mb-2'>MOVIE SEAT SELECTION</h1>
            <div className='w-75 mx-auto text-light' style={{backgroundColor: "rgba(128,128,128,0.4)", padding : "2vw 3.5vw "}}>
                <div className='content'>
                    <InputForm />
                    <div>
                        <ul className="d-flex align-items-center justify-content-start fs-5 m-0" style={{listStyle : "none"}}>
                            <li className="w-25 greenBox">
                                Selected Seat
                            </li>

                            <li className="w-25 redBox">
                                Reserved Seat
                            </li>

                            <li className="w-25 emptyBox">
                                Empty Seat
                            </li>
                        </ul>
                    </div>
                    <div className='my-3 text-center fs-5 fw-semibold'>
                        <span className='bg-warning'>Please Select your Seats NOW!</span>
                    </div>
                    <BookTicket />
                    <TableInfo />
                </div>
            </div>
            <div className="text-center text-light fs-5 fw-bold mt-5">
                <p>© 2018 Movie Seat Selection . All Rights Reserved | Design by <a href="google.com">W3layouts</a>
                </p>
            </div>
         </div>  
      </div>
    )
  }
}
