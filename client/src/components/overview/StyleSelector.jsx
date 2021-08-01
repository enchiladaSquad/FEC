import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircleOutline } from '@material-ui/icons';

const StyleNode = ({
  index, src, alt, marked,
}) => {
  return (
    <>
      <img className="style-node" key={index} src={src} alt={alt} />
      {marked ? <CheckCircleOutline className="style-check" /> : null}
    </>
  );
};

const StyleSelector = ({ styles, setCurrentStyleIndex, currentStyleIndex }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {styles.map((style, i) => {
        return (
          <>
            <StyleNode
              index={i}
              setCurrentStyleIndex={setCurrentStyleIndex}
              src={style.photos[0].thumbnail_url}
              alt={style.name + i}
              marked={currentStyleIndex === i}
            />
            {(i + 1) % 4 ? null : <div className="flex-break" />}
          </>
        );
      })}
    </div>
  );
};

StyleNode.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  marked: PropTypes.bool.isRequired,
};

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      style_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      original_price: PropTypes.string.isRequired,
      sale_price: PropTypes.string,
      'default?': PropTypes.bool.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          thumbnail_url: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ),
      skus: PropTypes.shape({
        [PropTypes.number.isRequired]: PropTypes.shape({
          quantity: PropTypes.number.isRequired,
          size: PropTypes.string.isRequired,
        }),
      }),
    }),
  ).isRequired,
  setCurrentStyleIndex: PropTypes.func.isRequired,
  currentStyleIndex: PropTypes.number.isRequired,
};

export default StyleSelector;
