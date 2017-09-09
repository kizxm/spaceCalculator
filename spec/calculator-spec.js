import {calculatorLogic} from './../JS/calculator.js';

describe('calculatorLogic', function() {

  it ('should test conversion of age into seconds', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    expect(calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)).toEqual(721440000)
  });
});
