'use client'
import Image from 'next/image';
import stonesImg from '../../public/stones.jpg';
import wheelImg from '../../public/wheel.jpg'
import { Roboto, Roboto_Slab } from 'next/font/google';
import FadingTitle from '../helper/FadingTitle';
import { useState, useEffect } from 'react';

const roboto = Roboto({subsets: ['latin'], weight: '400'});
const robotoSlab = Roboto_Slab({subsets: ['latin'] });

function Skills() {
  const [swapActive, setSwapActive] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSwapActive(!swapActive);
    }, 4000);
    return () => clearInterval(id);
  }, [swapActive]);

  return (
    <>
      <FadingTitle>Services</FadingTitle>
      <div className='services-description-box'>
        <div className={`flex services-description-title ${robotoSlab.className}`}>
          <h3>MY SERVICES</h3>
          <span>Here Are Some of My Skills</span>
        </div>
        <div className='services-description-content'>
          <h2>SERVICES</h2>
          <section className={roboto.className}>
            <div>
              <h3 className="font-black">1 - FRONT END DEVELOPMENT</h3>
              <ul className='text-gray-500'>
                <li>React.js</li>
                <li>HTML5 / CSS</li>
                <li>GSAP</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">2 - BACK END DEVELOPMENT</h3>
              <ul className='text-gray-500'>
                <li>Next.js</li>
                <li>Ruby on Rails</li>
                <li>Postgres SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">3 - PROGRAMMING LANGUAGES</h3>
              <ul className='text-gray-500'>
                <li>Python</li>
                <li>Javascript ES6</li>
                <li>Java</li>
                <li>Ruby</li>
                <li>C</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">4 - OTHERS</h3>
              <ul className='text-gray-500'>
                <li>ChatGPT</li>
                <li>API</li>
                <li>Cloudinary</li>
                <li>Heroko</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className={`services-image-box ${swapActive ? 'hidden' : ''}`}>
        <Image src={stonesImg} alt="stones" objectFit='cover'/>
      </div>
      <div className={`services-image-box ${!swapActive ? 'hidden' : ''}`}>
        <Image src={wheelImg} alt="wheel" objectFit='cover'/>
      </div>
    </>
  )
}

export default Skills
