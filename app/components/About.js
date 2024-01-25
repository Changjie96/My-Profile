"use client"
import Image from 'next/image'
import casualImg from '../../public/casual.jpg'
import { useEffect, useState } from 'react';
import { Roboto, Roboto_Slab } from 'next/font/google';
import FadingTitle from '../helper/FadingTitle';

const roboto = Roboto({subsets: ['latin'], weight: '400'});
const robotoSlab = Roboto_Slab({subsets: ['latin'] });

function About() {
  const [swapActive, setSwapActive] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSwapActive(!swapActive);
    }, 4000);
    return () => clearInterval(id);
  }, [swapActive]);

  return (
    <>
      <FadingTitle>About</FadingTitle>
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
          <section className={`${roboto.className} text-gray-500`}>
            Dedicated and passionate fresh graduate <strong>full stack developer</strong> ready for
            transition into the field of software engineering.
            Equipped with a solid understanding in <strong>web development</strong>
            gained from a rigorous and comprehensive bootcamp.
            Good in designing and developing high quality software applications <strong>(frontend and backend)</strong>.
            A <strong>quick learner, adaptable</strong> to new technologies and programming languages,
            eager to apply skills and knowledge in a challenging
            and growth-oriented environment.
          </section>
        </div>
      </div>
    </>
  )
}

export default About
