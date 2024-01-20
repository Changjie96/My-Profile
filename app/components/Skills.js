import Image from 'next/image';
import stonesImg from '../../public/stones.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Roboto, Roboto_Slab } from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], weight: '400'});
const robotoSlab = Roboto_Slab({subsets: ['latin'] });

function Skills() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text = "Services";

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
      <div className='absolute services-title-box'>
        {text.split("").map((letter, index)=> (
          <span key={index} ref={setLettersRef} className={robotoSlab.className}>
            {letter}
          </span>
        ))}
      </div>
      <div className='services-description-box'>
        <div className={`flex services-description-title ${robotoSlab.className}`}>
          <h3>MY SERVICES</h3>
          <span>Here Are Some of My Skills</span>
        </div>
        <div className='services-description-content'>
          <h2>Services</h2>
          <section className={roboto.className}>
            <div>
              <h3 className="font-black">1 - FRONT END DEVELOPMENT</h3>
              <ul>
                <li>React.js</li>
                <li>HTML5 / CSS</li>
                <li>GSAP</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">2 - BACK END DEVELOPMENT</h3>
              <ul>
                <li>Next.js</li>
                <li>Ruby on Rails</li>
                <li>Postgres SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">3 - PROGRAMMING LANGUAGES</h3>
              <ul>
                <li>Python</li>
                <li>Javascript ES6</li>
                <li>Java</li>
                <li>Ruby</li>
                <li>C</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black">4 - OTHERS</h3>
              <ul>
                <li>ChatGPT</li>
                <li>API</li>
                <li>Cloudinary</li>
                <li>Heroko</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className='services-image-box' >
        <Image src={stonesImg} alt="casual" objectFit='cover'/>
      </div>
    </>
  )
}

export default Skills
