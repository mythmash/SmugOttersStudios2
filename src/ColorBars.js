import './index.css';
import App from './App';
import Slider from '@material-ui/core/Slider';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
// function getval
window.redVal = 128;
window.greenVal = 128;
window.blueVal = 128;
window.penWidth = 100;

export default class ColorBars extends React.Component {
  render(){
    // var obj = <ColorBarB/>;
    return [
    <ColorBarR/>,
    <ColorBarG/>,
    <ColorBarB/>,
    <SizeBar/>
  ];
  }
}

function ColorPreview(){
  return <div id="previewColor"></div>
}

function ColorBarR (){
    const [value, setValue] = React.useState(128);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      // console.log(newValue);
      // console.log("rgb("+window.redVal+","+window.blueVal+","+window.blueVal+")");
      window.redVal=newValue;
      // document.getElementById("previewColor").style.background =
      // "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
      document.getElementById("sizeBar").style.background =
      "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
    };

    return <div id="colorBarR">
    <Slider
    value={value} onChange={handleChange}
    defaultValue={128}
    getAriaValueText={func}
    aria-labelledby="discrete-slider-small-steps"
    step={1}
    marks
    min={0}
    max={255}
    valueLabelDisplay="auto"
    />
    </div>

}

function ColorBarG (){

  const [value, setValue] = React.useState(128);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.greenVal=newValue;
    // document.getElementById("previewColor").style.background =
    // "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
    document.getElementById("sizeBar").style.background =
    "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
  };

    return <div id="colorBarG">
    <Slider
    value={value} onChange={handleChange}
    defaultValue={128}
    getAriaValueText={func}
    aria-labelledby="discrete-slider-small-steps"
    step={1}
    marks
    min={0}
    max={255}
    valueLabelDisplay="auto"/>
    </div>

}

function ColorBarB (){

  const [value, setValue] = React.useState(128);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.blueVal=newValue;
    // document.getElementById("previewColor").style.background =
    // "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
    document.getElementById("sizeBar").style.background =
    "rgb("+window.redVal+","+window.greenVal+","+window.blueVal+")"
  };

    return <div id="colorBarB">
    <Slider
    value={value} onChange={handleChange}
    defaultValue={128}
    getAriaValueText={func}
    aria-labelledby="discrete-slider-small-steps"
    step={1}
    marks
    min={0}
    max={255}
    valueLabelDisplay="auto"/>
    </div>

}

function SizeBar (){

  const [value, setValue] = React.useState(128);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.penWidth = newValue;
    console.log(newValue);
    };

    return <div id="sizeBar">
      <Slider
      value={value} onChange={handleChange}
      defaultValue={100}
      getAriaValueText={func}
      aria-labelledby="discrete-slider-restrict"
      step={null}
      valueLabelDisplay="auto"
      min={1}
      max={100}
      marks={marks}
      />
    </div>
}

function func (){
  return "hello"
}


const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 100,
    label: '100',
  },
];
