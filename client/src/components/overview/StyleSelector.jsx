import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircleOutline } from '@material-ui/icons';

import { makeRows } from 'src/utils';

const StyleNode = ({
  index, src, alt, setCurrentStyleIndex,
}) => {
  return (
    <img
      className="style-node"
      onClick={() => {
        setCurrentStyleIndex(index);
      }}
      key={alt}
      // onKeyPress={(e) => {
      //   if (e.code === index) setCurrentStyleIndex(index);
      // }}
      src={src}
      alt={alt}
    />
  );
};

// Todo: test 18079

const StyleSelector = ({ styles, setCurrentStyleIndex, currentStyleIndex }) => {
  const rows = makeRows(styles, 4);

  console.log('currentStyleIndex:', currentStyleIndex);

  return (
    <div className="node-container">
      {rows.map((row, i) => {
        return (
          <div key={i}>
            {row.map((style, j) => {
              const { name, photos } = style;
              const index = rows.length * i + j;

              return (
                <div key={index}>
                  {index === currentStyleIndex ? (
                    <>
                      <CheckCircleOutline className="style-check" />
                      <StyleNode
                        index={j}
                        setCurrentStyleIndex={setCurrentStyleIndex}
                        src={photos[0].thumbnail_url}
                        alt={name + j}
                      />
                    </>
                  ) : (
                    <StyleNode
                      index={index}
                      setCurrentStyleIndex={setCurrentStyleIndex}
                      src={photos[0].thumbnail_url}
                      alt={name + j}
                    />
                  )}
                </div>
              );
            })}
            <div className="flex-break" />
          </div>
        );
      })}
    </div>
  );
};

StyleNode.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  setCurrentStyleIndex: PropTypes.func.isRequired,
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
