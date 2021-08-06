import React from 'react';

const CharacteristicRadios = ({ chars }) => {
  const options = {
    Size: ['A size too small', 'Perfect', 'A size too big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs loose'],
  };
  return (
    Object.keys(chars).map((key) => {
      return (
        <div className="characteristic-radios-container">
          <span className="characteristic-radios-name">*{key}:</span>
            <label className="char-label-left" htmlFor="1">{options[key][0]}</label>
          <span className="characteristic-radios">
            <input type="radio" id="1" name={options[key]} className="radio" value={1} />
            <input type="radio" id="2" name={options[key]} className="radio" value={2} />
            <input required="required" type="radio" id="3" name={options[key]} className="radio" value={3} />
            <input type="radio" id="4" name={options[key]} className="radio" value={4} />
            <input  type="radio" id="5" name={options[key]} className="radio" value={5} />
          </span>
            <label className="char-label-right" htmlFor="5">{options[key][2]}</label>
        </div>
      );
    })
  );
};

export default CharacteristicRadios;
