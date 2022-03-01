import React from 'react'
import Header from '../Header/Header'
import { Services as  ServicesList} from '../Menu/Services'
const Services = () => {
  return (
    <>
   <Header  params={{ title: "Services", name:"Service" }} />
   <ServicesList />
   </>
  )
}

export default Services