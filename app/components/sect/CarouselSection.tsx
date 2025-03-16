"use client"; // Ensure this is a client component

import { useState } from "react";
import Image from "next/image";

const CarouselSection = () => {
    // List of image URLs (from the web)
    const images = [
        "/images/hero-bg-img.jpg",
        "/images/car2.jpg",
        "/images/car1.jpg",
    ];

    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-[400px] w-full overflow-hidden">
            {/* Carousel Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2"
            >
                &larr; {/* Left arrow */}
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2"
            >
                &rarr; {/* Right arrow */}
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`size-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselSection;