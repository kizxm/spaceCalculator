import {calculatorLogic} from './../JS/calculator.js';
/// ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦ ///
describe('calculatorLogic', function() {

  it ('should test conversion of age into seconds', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    expect(calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)).toEqual(721440000)
  });

  it ('should test conversion of age to Mercury', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    let seconds = calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)
    expect(calculateAge.mercuryConversion(seconds)).toEqual(95.32)
  });

  it ('should test conversion of age to Venus', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    let seconds = calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)
    expect(calculateAge.venusConversion(seconds)).toEqual(36.9)
  });

  it ('should test conversion of age to Mars', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    let seconds = calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)
    expect(calculateAge.marsConversion(seconds)).toEqual(12.17)
  });

  it ('should test conversion of age to Jupiter', function() {
    let calculateAge = new calculatorLogic(new Date("1994-10-29"), new Date("2017-09-08"))
    let seconds = calculateAge.secondsConversion(calculateAge.birthDay, calculateAge.toDay)
    expect(calculateAge.jupiterConversion(seconds)).toEqual(1.93)
  });

});
