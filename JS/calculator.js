export class calculatorLogic {

  constructor(birthDay, toDay) {
    this.birthDay = birthDay;
    this.toDay = toDay;
    this.life = 0;
  }

  secondsConversion() {
      let toDayTime = this.toDay.getTime();
      let birthDayTime = this.birthDay.getTime();
      let between = toDayTime - birthDayTime;
      let total = Math.floor(between / 1000);
      return total;
    }
  mercuryConversion(total) {
    const earthSeconds = 31536000;
    let ageFill = total / (earthSeconds * .24);
    let age = parseFloat(ageFill.toFixed(2));
    return age;
  }
  venusConversion(total) {
    const earthSeconds = 31536000;
    let ageFill = total / (earthSeconds * .62);
    let age = parseFloat(ageFill.toFixed(2));
    return age;
  }
  marsConversion(total) {
    const earthSeconds = 31536000;
    let ageFill = total / (earthSeconds * 1.88);
    let age = parseFloat(ageFill.toFixed(2));
    return age;
  }
  jupiterConversion(total) {
    const earthSeconds = 31536000;
    let ageFill = total / (earthSeconds * 11.86);
    let age = parseFloat(ageFill.toFixed(2));
    return age;
  }
// secondsConversion(birthDay) {
//   const number = 31536000;
//   let total = birthDay * number;
//   return total;
// }
}
