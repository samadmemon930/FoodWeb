import React from 'react'
import HomeSection from '../Components/home/HomeSection'
import CategorySection from '../Components/home/CategorySection'
import FeaturedRestaurant from '../Components/home/FeaturedRestaurant'
import CtaSection from '../Components/home/CtaSection'

const Home = () => {
  return (
    <>
    <HomeSection/>
    <CategorySection/>
    <FeaturedRestaurant/>
    <CtaSection/>
    </>
  )
}

export default Home