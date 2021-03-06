import {calculatorLogic} from './../js/calculator.js';
/// ✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦ ///
$(function() {
  $("#calculateAge").submit(function(event) {
    event.preventDefault();


    let birthDay = new Date($('#birthDay').val());
    let toDay = new Date();
    let gender = $("#gender").val();
    let region = $("#region").val();

    let age = new calculatorLogic(birthDay, toDay);
    let totalEarthTime = age.secondsConversion();

    let marsAge = age.marsConversion(totalEarthTime);
    let mercuryAge = age.mercuryConversion(totalEarthTime);
    let venusAge = age.venusConversion(totalEarthTime);
    let jupiterAge = age.jupiterConversion(totalEarthTime);

    $("#output").append('<li>' + birthDay + '<br>');
    $("#output").append('<li>' + "your age in Earth Seconds: " + totalEarthTime + '<br>');
    $("#output").append('<li>' + "your Mercury age: " + marsAge +'<br>');
    $("#output").append('<li>' + "your Venus age: " + mercuryAge +'<br>');
    $("#output").append('<li>' + "your Mars age: " + venusAge +'<br>');
    $("#output").append('<li>' + "your Jupiter age: " + jupiterAge +'<br>');
    $("#output").append('<hr noshade>');
  });
});
