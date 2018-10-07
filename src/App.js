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
    const colorname = (document.getElementsByClassName);
    
    return (
      <div className="Palettes">
    <div id="blue">
      <div className="bluecolor1"><p>rgba(2, 0, 175, 1)</p></div>
      <div className="bluecolor2">rgba(26, 54, 255, 1)</div>
      <div className="bluecolor3">rgba(4, 0, 255, 1)</div>
      <div className="bluecolor4"><p>{colorname}</p></div>
      <div className="bluecolor5"></div>
      <div className="bluecolor6"></div>
    </div>

   <ul id="red">
      <li className="redcolor1"></li>
      <li className="redcolor2"></li>
      <li className="redcolor3"></li>
      <li className="redcolor4"></li>
      <li className="redcolor5"></li>
      <li className="redcolor6"></li>
    </ul>


    <ul id="yellow">
      <li className="yellowcolor1"></li>
      <li className="yellowcolor2"></li>
      <li className="yellowcolor3"></li>
      <li className="yellowcolor4"></li>
      <li className="yellowcolor5"></li>
      <li className="yellowcolor6"></li>
    </ul>

    <ul id="orange">
      <li className="orangecolor1"></li>
      <li className="orangecolor2"></li>
      <li className="orangecolor3"></li>
      <li className="orangecolor4"></li>
      <li className="orangecolor5"></li>
      <li className="orangecolor6"></li>
    </ul>

    <ul id="green">
      <li className="greencolor1"></li>
      <li className="greencolor2"></li>
      <li className="greencolor3"></li>
      <li className="greencolor4"></li>
      <li className="greencolor5"></li>
      <li className="greencolor6"></li>
    </ul>

    <ul id="white">
      <li className="whitecolor1"></li>
      <li className="whitecolor2"></li>
      <li className="whitecolor3"></li>
      <li className="whitecolor4"></li>
      <li className="whitecolor5"></li>
      <li className="whitecolor6"></li>

    </ul>
        
      </div>
    );
  }
}

ReactDOM.render(
  <Colorpage />,
  document.getElementById('root')
);

export default Colorpage;