export class calculatorLogic {

  constructor(birthDay, toDay) {
    this.birthDay = birthDay;
    this.toDay = toDay;
    this.region = region;
    this.gender = gender;
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

  mercuryDeathConversion(regionAge) {
    let mercuryDeath = regionAge * (1/0.62);
    return mercuryDeath;
  }

//why won't it go through this loop?

  regionOut() {
    let regionAge = 0;
    age = number(document.getElementById("age").value);
    if(gender === "female" && region === "Africa") {
      regionAge = 74;
    } else if (gender === "male" && region === "Africa") {
      regionAge = 71;
    } else if (gender === "female" && region === "Asia") {
      regionAge = 79;
    } else if (gender === "male" && region === "Asia" ) {
      regionAge = 76;
    } else if (gender === "female" && region === "America") {
      regionAge = 81;
    } else if (gender === "male" && region === "America" ) {
      regionAge = 76;
    } else if (gender === "female" && region === "Europe") {
      regionAge = 82;
    } else if (gender === "male" && region === "Europe") {
      regionAge = 77;
    } else if (gender === "female" && region === "Latin") {
      regionAge = 74;
    } else if (gender === "male" && region === "Latin") {
      regionAge = 74;
    } else if (gender === "female" && region === "Middle") {
      regionAge = 76;
    } else if (gender === "male" && region === "Middle") {
      regionAge = 76;
    } else if (gender === "male" && region == "South") {
      regionAge = 76;
    } else if (gender === "female" && region == "South") {
      regionAge = 79;
    } else {
      regionAge = 74;
    } return regionAge;
    
  }

  // death(region, gender)
// secondsConversion(birthDay) {
//   const number = 31536000;
//   let total = birthDay * number;
//   return total;
// }
}
