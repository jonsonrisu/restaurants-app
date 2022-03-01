import React from 'react'
import Header from '../Header/Header'
import FoodMenu from '../Menu/FoodMenu'
export const Menu = () => {
  return (
    <>
     <Header  params={{ title: "Menus", name:"Menu" }} />
     <FoodMenu />
   </>
  )
}
