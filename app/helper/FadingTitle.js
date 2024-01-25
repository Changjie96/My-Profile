import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({subsets: ['latin'] });

function FadingTitle({ children }) {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

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
  }, [lettersRef])

  return (
    <div className='absolute title-box' ref={triggerRef}>
      {children.split("").map((letter, index)=> (
        <span key={index} ref={setLettersRef} className={robotoSlab.className}>
          {letter}
        </span>
      ))}
    </div>
  )
}

export default FadingTitle
