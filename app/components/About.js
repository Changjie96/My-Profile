"use client"
import Image from 'next/image'
import casualImg from '../../public/casual.jpg'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Roboto, Roboto_Slab } from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], weight: '400'});
const robotoSlab = Roboto_Slab({subsets: ['latin'] });

function About() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  const [swapActive, setSwapActive] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSwapActive(!swapActive);
    }, 4000);
    return () => clearInterval(id);
  }, [swapActive]);


  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text = "About";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {trigger: triggerRef.current},
      color: "rgba(0,0,0,0.04)",
      duration: 2.5,
      stagger: 0.5,
      ease: "power4.out"
    });
    return (() => {
      anim.kill();
    })
  }, [])

  return (
    <>
      <div className='absolute about-title-box' ref={triggerRef}>
        {text.split("").map((letter, index)=> (
          <span key={index} ref={setLettersRef} className={robotoSlab.className}>
            {letter}
          </span>
        ))}
      </div>
      <div className='about-image-box' >
        <Image src={casualImg} alt="casual" objectFit='contain'/>
      </div>
      <div className='about-description-box'>
        <div className={`flex about-description-title ${robotoSlab.className}`}>
            <span className={`name ${swapActive ? 'hidden' : ''}`}>Tan</span>
            <span className={`name ${swapActive ? 'hidden' : ''}`}>Chang Jie</span>
            <span className={`name ${!swapActive ? 'hidden' : ''}`}>Full Stack</span>
            <span className={`name ${!swapActive ? 'hidden' : ''}`}>Developer</span>
        </div>
        <div className='about-description-content'>
          <h2>ABOUT</h2>
          <section className={roboto.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </section>
        </div>
      </div>
    </>
  )
}

export default About
