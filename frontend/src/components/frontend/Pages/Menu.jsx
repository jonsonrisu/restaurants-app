import React from 'react'
import Header from '../Header/Header'
import FoodMenu from '../Menu/FoodMenu'
import withLayout from "../Layout"
 const Menu = () => {
  return (
    <>
     <Header  params={{ title: "Menus", name:"Menu" }} />
     <FoodMenu />
   </>
  )
}

export default withLayout(Menu);
