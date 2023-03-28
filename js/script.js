// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area and circumference of a circle.
 */
function calculate() {  

  //constant
  const PI = 3.14
  
  // Data being collected 
  let radius = parseFloat(document.getElementById('radius').value);

  //Data being processed
  let diameter = radius ** 2;
  let area = diameter * PI;
  let circumference = PI * radius * 2;
  
  // Data being shown
  document.getElementById('area').innerHTML = 'The area of the circle is ' + area.toFixed(2)
  document.getElementById('circumference').innerHTML = 'The circumference of the circle is ' + circumference.toFixed(2)
}