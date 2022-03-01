import React from 'react'
import { Topbar } from '../Topbar'
import About from './About'
import TeamMember from './TeamMember';
import { HomeServices } from './HomeServices';
import FoodMenu from '../Menu/FoodMenu';
const Home = () => {
  return (
    <>
         <Topbar/>
        <HomeServices />
        <FoodMenu />
         <TeamMember/>

    </>
  )
}

export default Home