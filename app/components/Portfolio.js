import { Roboto_Slab } from 'next/font/google';
import EmblaCarousel from '../helper/EmblaCarousel';
import FadingTitle from '../helper/FadingTitle';

const robotoSlab = Roboto_Slab({subsets: ['latin'] });

const OPTIONS = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 20
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Portfolio() {
  return (
    <>
      <FadingTitle>Portfolio</FadingTitle>
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
