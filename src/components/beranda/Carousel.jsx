import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import PropTypes from 'prop-types';
import React from "react";

function Carousel({carousels = []}){
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentData = carousels[currentIndex];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % carousels.length)
  };
  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + carousels.length) % carousels.length);
  };

  return( 
    <div id='container'>
      <div id='carousel'>
        <MdKeyboardArrowLeft id="button-imagea" onClick={handlePrevious}/>
        <MdKeyboardArrowRight id="button-imageab" onClick={handleNext}/>
        {currentData && currentData.gambar ? 
          (
            <img src={currentData.gambar} alt={currentData.keterangan || 'Carousel image'} />
          ) : (
            <p>No image available</p>
          )
        }            
      </div>    
    </div>
  )
}

Carousel.propTypes = {
  carousels: PropTypes.array.isRequired
}

export default Carousel;