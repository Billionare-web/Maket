import React from 'react'
import Header from './header'
import School from './school'
import Footer from './footer'

function Home() {
  return (
    <div>
      <div className='px-32'>
        <Header />
        <School />
      </div>
      <Footer />
    </div>
  )
}

export default Home