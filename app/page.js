"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { grey } from '@mui/material/colors';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import IconBox from './helper/IconBox';


export default function Home() {
  // const [iconsRef, setIconsRef] = useIconArrayRef();
  // const iconTriggerRef = useRef(null);

  // function useIconArrayRef() {
  //   const iconsRef = useRef([]);
  //   iconsRef.current = [];
  //   return [iconsRef, (ref) => ref && iconsRef.current.push(ref)]
  // }

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const anim = gsap.to(iconTriggerRef.current, {
  //     scrollTrigger: {
  //       trigger: iconTriggerRef.current,
  //       scrub: 2,
  //       start: "top 100px",
  //       end: "+=1500px",
  //       markers: true,
  //     },
  //     duration: 10,
  //     ease: "none",
  //     y:2800,
  //   });
  //   return (() => {
  //     anim.kill();
  //   })
  // }, [iconTriggerRef])

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
