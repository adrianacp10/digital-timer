import { useState } from 'react';
import gsap from 'gsap';

export default function Carousel () {
    const images = [
        'images/peoplebeach1280.jpg',
        'images/cristo.jpg',
        'images/vertrio.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
        const nextIndex = (currentImageIndex +1) % images.length;
        setCurrentImageIndex(nextIndex);

        //animación de transición 
        gsap.fromTo(
            '.carousel-image',
            {opacity : 0},
            {opacity : 1, duration: 1, ease: 'power2.out'}
        );
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 +images.length) % images.length;
        setCurrentImageIndex(prevImage);

        //animacion de transicion
        gsap.fromTo(
            '.carousel-image',
            {opacity: 0},
            {opacity: 1, duration: 1, ease:'power2.out'}
        );
    };

    return (
        <div>
            <button onClick={prevImage}>Anterior</button>
            <img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="carousel-image"
            />
            <button onClick={nextImage}>Siguiente</button>
        </div>
    );
}