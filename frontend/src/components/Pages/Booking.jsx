import React from 'react'
import Header from '../Header/Header'
import Reservation from '../Menu/Reservation'
const Booking = () => {
  return (
   <>
   <Header  params={{ title: "Booking", name:"Booking" }} />
   <Reservation />
   </>
  )
}

export default Booking