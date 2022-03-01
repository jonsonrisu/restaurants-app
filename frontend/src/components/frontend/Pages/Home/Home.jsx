import React from 'react'
import withLayout from "../../Layout"
import TeamMember from '../TeamMember';
import { HomeServices } from './HomeServices';
import FoodMenu from '../../Menu/FoodMenu';
import { TopSection } from './TopSection';
const Home = (props) => {
  return (
    <>
        <TopSection />
        <HomeServices />
        <FoodMenu />
         <TeamMember/>
    </>
  )
}

export default withLayout(Home);