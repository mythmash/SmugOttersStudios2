import React, { Component } from 'react';
import Canvas from './Canvas'

export default class CanvBox extends React.Component {
  render(){
    return <div id = "canvBox">
      <Canvas/>
    </div>
  }

  componentDidMount(){
    window.redVal = 128;
    window.greenVal = 128;
    window.blueVal = 128;
    window.penWidth = 100;
    window.erasing = false;

    let canv = document.getElementById("myCanvas");
    var ctx = canv.getContext("2d");
    var mouseClicked = false;
    canv.addEventListener('mousemove', e => {
      console.log("moved");
      ctx.lineWidth = window.penWidth;
      if(mouseClicked){
        if(window.erasing){
          var lx = window.x;
          var ly = window.y;
          window.x = e.offsetX;
          window.y = e.offsetY;

          ctx.fillStyle = 'white';
          ctx.strokeStyle= 'white';

          if(Math.sqrt((window.x-lx)*(window.x-lx) +(window.y-ly)*(window.y-ly))<window.penWidth/2){
            ctx.moveTo(lx, ly);
            ctx.beginPath();
            ctx.arc(window.x, window.y, window.penWidth/2, 0, 2*Math.PI, true);
            ctx.fill();
          }else{
            ctx.beginPath();
            ctx.moveTo(lx, ly);
            ctx.lineTo(window.x, window.y);
            ctx.stroke();
          }


        }else{
          var lx = window.x;
          var ly = window.y;
          window.x = e.offsetX;
          window.y = e.offsetY;

          ctx.fillStyle = 'rgb('+window.redVal+', '+window.greenVal+ ', '+window.blueVal+')';
          ctx.strokeStyle= 'rgb('+window.redVal+', '+window.greenVal+ ', '+window.blueVal+')';

          if(Math.sqrt((window.x-lx)*(window.x-lx) +(window.y-ly)*(window.y-ly))<window.penWidth/2){
            ctx.moveTo(lx, ly);
            ctx.beginPath();
            ctx.arc(window.x, window.y, window.penWidth/2, 0, 2*Math.PI, true);
            ctx.fill();
          }else{
            ctx.beginPath();
            ctx.moveTo(lx, ly);
            ctx.lineTo(window.x, window.y);
            ctx.stroke();
          }
        }

      }

    });

    canv.addEventListener('mousedown', e => {
      if (e.which == 3){
        console.log("rightclick");
        var x = e.offsetX;
        var y = e.offsetY;
        var coord = "x=" + x + ", y=" + y;
        var ctx = canv.getContext("2d");
        var pixels = ctx.getImageData(x, y, 1, 1);
        console.log(pixels);
        var data = pixels.data;
        window.redVal = data[0];
        window.greenVal = data[1];
        window.blueVal = data[2];
        document.getElementById("sizeBar").style.background =
        "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
        return;
      }
      window.x = e.offsetX;
      window.y = e.offsetY;
      console.log("clicked");
      mouseClicked = true;
    });

    canv.addEventListener('mouseup', e => {
      console.log("clicked");
      mouseClicked = false;
    });
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
