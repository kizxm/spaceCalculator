export class calculatorLogic {

  constructor(birthDay, toDay) {
    this.birthDay = birthDay;
    this.toDay = toDay;
    this.life = 0;
  }

secondsConversion(birthDay, toDay) {
  let toDayTime = toDay.getTime();
  let birthDayTime = birthDay.getTime();
  let between = toDayTime - birthDayTime;
  let total = Math.floor(between / 1000);
  return total;
}

mercuryConversion(total){
  const earthSeconds = 31536000;
  let ageFill = total / (easrthSeconds * .24);
  let age = parseFloat(ageFill.toFixed(2));
  return age;
}
venusConversion(total){
  const earthSeconds = 31536000;
  let ageFill = total / (easrthSeconds * .62);
  let age = parseFloat(ageFill.toFixed(2));
  return age;
}
marsConversion(total){
  const earthSeconds = 31536000;
  let ageFill = total / (easrthSeconds * 1.88);
  let age = parseFloat(ageFill.toFixed(2));
  return age;
}
jupiterConversion(total){
  const earthSeconds = 31536000;
  let ageFill = total / (easrthSeconds * 11.86);
  let age = parseFloat(ageFill.toFixed(2));
  return age;
}


}
