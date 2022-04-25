// Copyright (c) 2020 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.FN
// Created on: April 22 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

function random() {
   // input
  const sliders value = parseInt(document.getElementById('sliders value').value)

  // process
  const sliders value = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10 

  // output
  document.getElementById('area').innerHTML = 'The Value is: ' +  value
}
}
/**