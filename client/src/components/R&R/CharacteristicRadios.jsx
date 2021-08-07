import React from 'react';

const CharacteristicRadios = ({ chars }) => {
  const options = {
    Size: ['A size too small', 'A size too big'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs loose'],
  };
  return (
    Object.keys(chars).map((key) => {
      return (
        <div className="characteristic-radios-container">
          <span className="characteristic-radios-name">*{key}:</span>
            <label className="char-label-left" htmlFor="1">{options[key][0]}</label>
          <span className="characteristic-radios">
            <input type="radio" id="1" name={key} className="radio" value="1" />
            <input type="radio" id="2" name={key} className="radio" value="2" />
            <input required="required" type="radio" id="3" name={key} className="radio" value="3" />
            <input type="radio" id="4" name={key} className="radio" value="4" />
            <input type="radio" id="5" name={key} className="radio" value="5" />
          </span>
            <label className="char-label-right" htmlFor="5">{options[key][1]}</label>
        </div>
      );
    })
  );
};

export default CharacteristicRadios;
