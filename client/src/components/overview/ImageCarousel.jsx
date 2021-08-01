import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandLess as PrevThumbnail,
  ExpandMore as NextThumbnail,
} from '@material-ui/icons';

import MainPhoto from 'components/overview/MainPhoto';
import Thumbnail from 'components/overview/Thumbnail';

const THUMBNAIL_LENGTH = 7;

// const MainPhoto = ({
//   handlePrevImage,
//   handleNextImage,
//   photos,
//   currentPhotoIndex,
//   alt,
// }) => (
//   <div id="main-photo-container">
//     <div id="icon-container">
//       <PrevImage id="arrow-left" onClick={handlePrevImage} />
//       <Fullscreen id="fs-icon" />
//       <NextImage id="arrow-right" onClick={handleNextImage} />
//     </div>

//     <img id="main-photo" src={photos[currentPhotoIndex].url || ''} alt={alt} />
//   </div>
// );

// const ImageCarousel = (
//   thumbMin,
//   handlePrevThumbnail,
//   currentThumbnails,
//   thumbMax,
//   photos,
//   handleNextThumbnail,
//   isImageThumbnail,
// ) => {
//   console.log('handlePrevThumbnail:', handlePrevThumbnail);
//   return (
//     <div id="carousel-container">
//       {typeof handlePrevThumbnail === 'function' ? (
//         <PrevThumbnail
//           style={{
//             // fontSize: 'large',
//             zIndex: '5',
//             visibility: thumbMin > 0 ? 'visible' : 'hidden',
//           }}
//           onClick={handlePrevThumbnail}
//         />
//       ) : null}
//       {currentThumbnails
//         ? currentThumbnails.map((photo, i) => (
//           <Thumbnail
//             isImageThumbnail={isImageThumbnail(photo)}
//             photo={photo}
//             index={i}
//           />
//         ))
//         : null}
//       {photos && typeof handleNextThumbnail === 'function' ? (
//         <NextThumbnail
//           style={{
//             zIndex: '5',
//             visibility: thumbMax < photos.length - 1 ? 'visible' : 'hidden',
//           }}
//           onClick={handleNextThumbnail}
//         />
//       ) : null}
//     </div>
//   );
// };

const ImageGallery = ({
  photos,
  currentPhotoIndex,
  setCurrentPhotoIndex,
  alt,
}) => {
  const [thumbMin, setThumbMin] = useState(0);
  const [thumbMax, setThumbMax] = useState(0);
  const [currentThumbnails, setCurrentThumbnails] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setThumbMin(0);
    setThumbMax(6);
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, []);

  useEffect(() => {
    setCurrentThumbnails(photos.slice(thumbMin, thumbMax + 1));
  }, [photos, thumbMin, thumbMax]);

  const handlePrevThumbnail = () => {
    setThumbMin((prevMin) => (prevMin > 0 ? prevMin - 1 : prevMin));
    setThumbMax((prevMax) => (prevMax > THUMBNAIL_LENGTH - 1 ? prevMax - 1 : prevMax));
  };

  const handleNextThumbnail = () => {
    setThumbMin((prevMin) => (prevMin < photos.length - THUMBNAIL_LENGTH ? prevMin + 1 : prevMin));
    setThumbMax((prevMax) => (prevMax < photos.length - 1 ? prevMax + 1 : prevMax));
  };

  const handlePrevImage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };

  const handleNextImage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const isImageThumbnail = (thumbnail) => {
    if (photos[currentPhotoIndex].thumbnail_url === thumbnail.thumbnail_url) {
      return true;
    }
    return false;
  };

  return (
    <>
      <MainPhoto
        handlePrevImage={handlePrevImage}
        handleNextImage={handleNextImage}
        photos={photos}
        currentPhotoIndex={currentPhotoIndex}
        alt={alt}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      {/* <ImageCarousel
        thumbMin={thumbMin}
        handlePrevThumbnail={handlePrevThumbnail}
        currentThumbnails={currentThumbnails}
        thumbMax={thumbMax}
        photos={photos}
        handleNextThumbnail={handleNextThumbnail}
        isImageThumbnail={isImageThumbnail}
      /> */}
      <div id="carousel-container">
        <PrevThumbnail
          style={{
            // fontSize: 'large',
            zIndex: '5',
            visibility: thumbMin > 0 ? 'visible' : 'hidden',
            color: 'white',
          }}
          onClick={handlePrevThumbnail}
        />
        {currentThumbnails.map((photo, i) => (
          <Thumbnail
            isImageThumbnail={isImageThumbnail(photo)}
            photo={photo}
            index={i}
          />
        ))}
        <NextThumbnail
          style={{
            zIndex: '5',
            visibility: thumbMax < photos.length - 1 ? 'visible' : 'hidden',
            color: 'white',
          }}
          onClick={handleNextThumbnail}
        />
      </div>
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  setCurrentPhotoIndex: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGallery;
