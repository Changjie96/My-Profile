import image1 from '../../public/usepopcorn.png';
import image2 from '../../public/reactquiz.png';
import image3 from '../../public/eatnsplit.png';
import image4 from '../../public/snapc.png';

export const images = [
  {
    name: image1,
    link: "https://01-popcorn-list.vercel.app/"
  },
  {
    name: image2,
    link: "https://02-react-quiz.vercel.app/"
  },
  {
    name: image3,
    link: "https://03-eatnsplit.vercel.app/"
  },
  {
    name: image4,
    link: "https://snapc-750301f6d492.herokuapp.com/"
  },
]

export const imageByIndex = (index, property) => images[index % images.length][property]
