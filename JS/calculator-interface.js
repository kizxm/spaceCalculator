import {calculatorLogic} from './../JS/calculator.js';

$(document).ready(function() {
  $("#calculateAge").submit(function(event){
    event.preventDefault();

    let birthDay = new Date($("input#birthDay").val());
    console.log($("input#birthDay").val());
    let today = new Date();
    // let gender = $("input#gender").val();
    // let region = $("input#region").val();
    let age = new Age(birthDay, toDay);
    let totalEarthTime = age.secondsConversion(age.birthDay, age.toDay);




    $("#birthDay").text(birthDay);
    $("#toDay").text(toDay);

  });
});
