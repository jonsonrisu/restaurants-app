import React from 'react'
import Header from '../../Header/Header'
import withLayout from '../../Layout'
import TestimonialList from './TestimonialList'
const Testimonial = () => {
  return (
      <>
    <Header  params={{ title: "Testimonials", name:"Testimonial" }}  />
      <TestimonialList />
 </>
  )
}

export default withLayout(Testimonial)