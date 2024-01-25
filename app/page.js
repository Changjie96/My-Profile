"use client"
import Navbar from './components/Navbar'
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import IconBox from './helper/IconBox';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className='right-icon-box-container'>
        <IconBox />
      </div>
      <div className='content-box'>
        <About />
      </div>
      <div className='second-content-box relative'>
        <Skills />
      </div>
      <div className='third-content-box relative'>
        <Portfolio />
      </div>
      <div className='bottom-icon-box-container'>
        <IconBox />
      </div>
    </>
  )
}
