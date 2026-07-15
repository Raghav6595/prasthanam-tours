import { useEffect, useRef, useState } from "react";
import destinations from "../data/destinations";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PopularDestinations() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    const timerRef = useRef(null);

    // Starts / Restarts Auto Slide
    const startAutoSlide = () => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            nextSlide();
        }, 3000);
    };

    useEffect(() => {
        startAutoSlide();

        return () => clearTimeout(timerRef.current);
    }, [currentIndex]);

    const goToSlide = (index) => {
        setAnimate(false);

        setTimeout(() => {
            setCurrentIndex(index);
            setAnimate(true);
        }, 500);
    };

    const nextSlide = () => {
        const nextIndex =
            currentIndex === destinations.length - 1
                ? 0
                : currentIndex + 1;

        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex =
            currentIndex === 0
                ? destinations.length - 1
                : currentIndex - 1;

        goToSlide(prevIndex);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Popular Destinations
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover handpicked destinations that promise unforgettable
                        experiences for every kind of traveller.
                    </p>
                </div>

                {/* Carousel */}

                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[520px]">

                    {/* Images */}

                    {destinations.map((destination, index) => (
                        <img
                            key={destination.id}
                            src={destination.image}
                            alt={destination.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                        />
                    ))}

                    {/* Gradient Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

                    {/* Text */}

                    <div className="relative z-20 h-full flex flex-col justify-end items-center text-center text-white pb-14 px-8">

                        <h3
                            className={`text-5xl font-bold mb-4 transition-all duration-500 ${animate
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            {destinations[currentIndex].title}
                        </h3>

                        <p
                            className={`max-w-3xl text-xl leading-relaxed transition-all duration-500 delay-150 ${animate
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            {destinations[currentIndex].description}
                        </p>

                    </div>

                    {/* Previous */}

                    <button
                        onClick={prevSlide}
                        className="absolute z-30 left-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition flex items-center justify-center text-white"
                    >
                        <FaChevronLeft size={22} />
                    </button>

                    {/* Next */}

                    <button
                        onClick={nextSlide}
                        className="absolute z-30 right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition flex items-center justify-center text-white"
                    >
                        <FaChevronRight size={22} />
                    </button>

                </div>

                {/* Navigation Dots */}

                <div className="flex justify-center mt-8 gap-3">
                    {destinations.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                    ? "w-8 h-3 bg-orange-400"
                                    : "w-3 h-3 bg-gray-400 dark:bg-gray-600"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}