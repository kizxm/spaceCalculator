import {calculatorLogic} from './../js/calculator.js';

$(function() {
  $("#calculateAge").submit(function(event) {
    event.preventDefault();


    let birthDay = new Date($('#birthDay').val());
    let toDay = new Date();
    // let gender = $("input#gender").val();
    // let region = $("input#region").val();
    // let age = new calculatorLogic(birthDay, toDay);
    // let totalEarthTime = age.secondsConversion();




    $("#birthDay").text(birthDay);
    $("#toDay").text(toDay);

  });
});
