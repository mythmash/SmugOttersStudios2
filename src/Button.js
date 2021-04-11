import React, { Component } from 'react';
// import * as loadImage from 'blueimp-load-image'
import * as ml5 from 'ml5';
import './Button.css'

export default class Button extends React.Component {
  render() {
    return [<button id="button" class="button button1">Predict</button>, <button class="button button1" onClick={clear}>Clear</button>]
  }
  componentDidMount(){
    const classifier = ml5.imageClassifier("MobileNet").then(classifier => {
      console.log('Model Loaded!');
      let button = document.getElementById("button");
      button.addEventListener("click", () => {
        console.log("click handling");
        var canvas = document.getElementById("myCanvas");
        var savedData = canvas.toDataURL();
        console.log(savedData);
        console.log("reached predict section");
        classifier.classify(canvas, getResult);
      });
    });
  }
}

function clear () {
  let canv = document.getElementById("myCanvas");
  var ctx = canv.getContext("2d");
  ctx.beginPath();
  ctx.rect(0, 0, 640, 480);
  ctx.fillStyle = "white";
  ctx.fill();
}
//
//
// function predict () {
//   // const ml5 = window.ml5;
//   var mobilenet;
//   var savedData;
//   var canvas = document.getElementById("myCanvas");
//   savedData = canvas.toDataURL();
//   mobilenet  = ml5.imageClassifier('MobileNet');
//   console.log(mobilenet);
//   console.log("reached predict section");
//   mobilenet.classify(getResult);
// }

function getResult(erroo, resu){
  console.log("start");
    console.log(resu);
    document.getElementById("button").innerHTML = "Prediction: "+resu[0].label;
}
