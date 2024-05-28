import CarouselHome from '@/components/client/carouselHome'
import Footer from '@/components/client/footer'
import MainGridsHome from '@/components/client/mainGridsHome'
import React from 'react'

const page = () => {
  return (
    <div>
      <CarouselHome/>
      <MainGridsHome/>
      <Footer/>
    </div>
  )
}

export default page
