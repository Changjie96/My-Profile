import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Roboto, Roboto_Slab } from 'next/font/google';
import EmblaCarousel from '../helper/EmblaCarousel';

const roboto = Roboto({subsets: ['latin'], weight: '400'});
const robotoSlab = Roboto_Slab({subsets: ['latin'] });

const OPTIONS = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 20
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Portfolio() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text = "Portfolio";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1
  }

  return (
    <>
      <div className='absolute portfolio-title-box'>
        {text.split("").map((letter, index)=> (
          <span key={index} ref={setLettersRef} className={robotoSlab.className}>
            {letter}
          </span>
        ))}
      </div>
      <div className='portfolio-description-box'>
        <div className={`portfolio-description-title ${robotoSlab.className}`}>
          <h3>PORTFOLIO</h3>
          <span>Done Projects</span>
        </div>
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>

    </>
  )
}

export default Portfolio
