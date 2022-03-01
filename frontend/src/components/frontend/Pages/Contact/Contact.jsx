import React from 'react'
import Header from '../../Header/Header';
import ContactForm from './ContactForm';
import withLayout from "../../Layout"
const Contact = () => {
  return (
    <>
    <Header  params={{ title: "Contact Us", name:"Contact" }} />
     <ContactForm />
    </>
  )
}

export default withLayout(Contact)