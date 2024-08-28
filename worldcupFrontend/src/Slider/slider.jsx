import React, { useState } from "react";
import {Link}  from "react-router-dom";

const Slider = () => {

    const images=["https://www.arabnews.pk/sites/default/files/userimages/4264931/f6-2mu1buaag5rm.jpg",
        "https://www.aljazeera.com/wp-content/uploads/2024/05/AP23287309633441-1716574110.jpg?resize=770%2C513&quality=80",
        "https://crictoday.com/wp-content/uploads/2023/01/592590f4-63ea-11e8-a998-12ee0acfa260.jpg",
        "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/sports/NEPvsUAE20230502U8A1243-1685842410.jpg",
        "https://usacricket.org/wp-content/uploads/2022/04/20220405-USA-bowler-Rusty-Theron-gets-high-fives-after-a-wicket-600x403.jpg"
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
     <div>
    <Link
        to="/teams"
        className="text-green-800 font-bold ml-10 hover:text-green-500"
      >
        Move To Teams Page
      </Link>
    </div>
    <div className="relative w-full max-w-full mx-auto mt-10">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[400px] md:h-[700px] object-fill"
        />
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        ❯
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
    
    </>
    
  );
};

export default Slider;
