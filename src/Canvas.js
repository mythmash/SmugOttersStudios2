import React, { Component } from 'react';

export default class Canvas extends React.Component {
  render(){

    return <div id = "canvBox">
      <canvas id="myCanvas" width="640" height="480"></canvas>
    </div>
  }
  componentDidMount(){
    let canv = document.getElementById("myCanvas");
    clearSoup();
  }

}
function clearSoup(){

  let canv = document.getElementById("myCanvas");
  var ctx = canv.getContext("2d");
  ctx.beginPath();
  ctx.rect(0, 0, 640, 480);
  ctx.fillStyle = "white";
  ctx.fill();
}
