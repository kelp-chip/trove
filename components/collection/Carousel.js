import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../pages/appContext.js';


export const Carousel = (props) => {

  const [images, setImages] = useState(props.images)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setImages(props.images)
    setCurrentImage(0)
  }, [props.images])

  const onIndicatorClick = (idx) => {
    setCurrentImage(idx)
  }

  const onPrevImageClick = () => {
    currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1);
  }

  const onNextImageClick = () => {
    currentImage === images.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
  }

  return (
    <>
      <div className='image-carousel'>
        <button onClick={onPrevImageClick} className="prev-image">
          <svg width="45" height="45" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.5" cy="39.5" r="39.5" transform="rotate(180 39.5 39.5)" fill="#C4C4C4" />
            <path d="M48 22L30.5 39.5L48 57L44.5 64L20 39.5L44.5 15L48 22Z" fill="#323232" />
          </svg>
        </button>
        <img className="displayImg" src={images[currentImage]}></img>
        <div onClick={onNextImageClick} className="next-image">
          <svg width="45" height="45" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.5" cy="39.5" r="39.5" fill="#C4C4C4" />
            <path d="M31 57L48.5 39.5L31 22L34.5 15L59 39.5L34.5 64L31 57Z" fill="#323232" />
          </svg>
        </div>
      </div>
      <div>

      </div>
      <div className="carousel-indicators">
        {Indicators(images, currentImage, onIndicatorClick)}
      </div>


    </>
  )
}

const Indicators = (photos, displayedPhoto, onIndicatorClick) => {
  const { theme } = useAppContext();
  let indicators = [];
  let inactive = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className={theme.indicatorInactive} cx="7.5" cy="7.5" r="7.5" />
  </svg>
  let active = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className={theme.indicatorActive} cx="7.5" cy="7.5" r="7.5" />
  </svg>

  for (var i = 0; i < photos.length; i++) {
    i === displayedPhoto ? indicators.push({ component: active, idx: i }) : indicators.push({ component: inactive, idx: i })
  }

  return indicators.map((i) => {
    return <span onClick={() => { onIndicatorClick(i.idx) }}> {i.component}</span>
  })

}