export class calculatorLogic {

  constructor(birthDay, toDay) {
    this.birthDay = birthDay;
    this.toDay = toDay;
  }

secondsConversion(birthDay, toDay) {
  let toDayTime = toDay.getTime();
  let birthDayTime = birthDay.getTime();
  let between = toDayTime - birthDayTime;
  let total = Math.floor(between / 1000);
  return total;
}

}
