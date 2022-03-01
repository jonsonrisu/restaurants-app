import React from 'react'
import Header from '../Header/Header'
import Reservation from '../Menu/Reservation'
import withLayout from "../Layout"
const Booking = () => {
  return (
   <>
   <Header  params={{ title: "Booking", name:"Booking" }} />
   <Reservation />
   </>
  )
}

export default withLayout(Booking)