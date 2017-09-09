import {calculatorLogic} from './../js/calculator.js';

$(function() {
  $("#calculateAge").submit(function(event) {
    event.preventDefault();
    let birthDay = $("#birthDay").val();
    // let toDay = new Date();
    // let gender = $("input#gender").val();
    // let region = $("input#region").val();
    let age = new calculatorLogic(birthDay, toDay);
    let totalEarthTime = age.secondsConversion();




    $("#birthDay").text(total);
    $("#toDay").text(toDay);

  });
});
