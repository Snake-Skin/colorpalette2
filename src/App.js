import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';





class Colorpage extends Component {
  render (){
    return (
      <div className="container">
        <Colors />
      </div>
    );
  }
}

class Colors extends Component {
  render (){
    return (
      <div className="colors"> 
        <Palettes />
      </div>
    );
  }
}

class Palettes extends Component {
  render (){
   //const colorname = document.querySelector.className;


  
    return (
  <div className="colors">
       <div id="red" className="palettes" onClick={this.favorite}>
      <div className="redcolor1">{'.redcolor4'}</div>
      <div className="redcolor2">{'.redcolor4'}</div>
      <div className="redcolor3">{'.redcolor4'}</div>
      <div className="redcolor4">{'.redcolor4'}</div>
      <div className="redcolor5">{'.redcolor4'}</div>
      <div className="redcolor6">{'.redcolor4'}</div>
    </div>

<div id="orange" className="palettes">
      <div className="orangecolor1">{'.orangecolor4'}</div>
      <div className="orangecolor2">{'.orangecolor4'}</div>
      <div className="orangecolor3">{'.orangecolor4'}</div>
      <div className="orangecolor4">{'.orangecolor4'}</div>
      <div className="orangecolor5">{'.orangecolor4'}</div>
      <div className="orangecolor6">{'.orangecolor4'}</div>
    </div>

   <div id="yellow" className="palettes">
      <div className="yellowcolor1">{'.yellowcolor4'}</div>
      <div className="yellowcolor2">{'.yellowcolor4'}</div>
      <div className="yellowcolor3">{'.yellowcolor4'}</div>
      <div className="yellowcolor4">{'.yellowcolor4'}</div>
      <div className="yellowcolor5">{'.yellowcolor4'}</div>
      <div className="yellowcolor6">{'.yellowcolor4'}</div>
    </div>

<div id="green" className="palettes">
      <div className="greencolor1">{'.greencolor4'}</div>
      <div className="greencolor2">{'.greencolor4'}</div>
      <div className="greencolor3">{'.greencolor4'}</div>
      <div className="greencolor4">{'.greencolor4'}</div>
      <div className="greencolor5">{'.greencolor4'}</div>
      <div className="greencolor6">{'.greencolor4'}</div>
    </div>

    <div id="blue" className="palettes">
      <div className="bluecolor1">{'.bluecolor4'}</div>
      <div className="bluecolor2">{'.bluecolor4'}</div>
      <div className="bluecolor3">{'.bluecolor4'}</div>
      <div className="bluecolor4">{'.bluecolor4'}</div>
      <div className="bluecolor5">{'.bluecolor4'}</div>
      <div className="bluecolor6">{'.bluecolor4'}</div>
    </div>

    <div id="white" className="palettes">
      <div className="whitecolor1">{'.whitecolor4'}</div>
      <div className="whitecolor2">{'.whitecolor4'}</div>
      <div className="whitecolor3">{'.whitecolor4'}</div>
      <div className="whitecolor4">{'.whitecolor4'}</div>
      <div className="whitecolor5">{'.whitecolor4'}</div>
      <div className="whitecolor6">{'.whitecolor4'}</div>
    </div>
        
  </div>
    );
  }
}

ReactDOM.render(
  <Colorpage />,
  document.getElementById('root')
);

export default Colorpage;