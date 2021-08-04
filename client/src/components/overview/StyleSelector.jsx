import React from 'react';
import PropTypes from 'prop-types';

import StyleNode from 'components/overview/StyleNode';

const StyleSelector = ({ styles, setStyleIndex, styleIndex }) => {
  return (
    <div className="styles-container">
      {styles.map((style, i) => {
        return (
          <>
            <StyleNode
              index={i}
              src={style.photos[0].thumbnail_url}
              alt={style.name + i}
              marked={styleIndex === i}
              setCurrentStyleIndex={setStyleIndex}
            />
            {/* {(i + 1) % 4 ? null : <div className="flex-break" />} */}
          </>
        );
      })}
    </div>
  );
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
  setStyleIndex: PropTypes.func.isRequired,
  styleIndex: PropTypes.number.isRequired,
};

export default StyleSelector;
