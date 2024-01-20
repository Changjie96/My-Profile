import image1 from '../../public/casual.jpg';
import image2 from '../../public/goldtemple.jpg';
import image3 from '../../public/stones.jpg';
import image4 from '../../public/wheel.jpg';

export const images = [image1, image2, image3, image4]

export const imageByIndex = (index) => images[index % images.length]
