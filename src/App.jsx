import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimomials from './components/Testimomials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
        {/* Posicionar la hero en medio */}
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimomials />
          <Footer/>
        </div>
    </div>

    
  )
}

export default App