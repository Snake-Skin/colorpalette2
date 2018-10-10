import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';





class Colorpage extends Component {
  render (){
    
    return (
      <div >
        <Colors />
      </div>
    );
  }
}

class Colors extends Component {
  render (){
    
    return (
      <div >
        <Favorites />
      </div>
    );
  }
}

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false};
  }

  toggle() {
      this.setState({addClass: !this.state.addClass});
  }
  
  render (){
      let favoritesClass = ["favorites"]; if(this.state.addClass) {favoritesClass.push('.favorites');
    }
   
    return (
    <div className ={favoritesClass.join( ' ')} onClick={this.toggle.bind(this)}>
    <Palettes />
      </div>
    );
  }
}

class Palettes extends Component {
  render (){
// ADD onCick that switches places border around color clicked and grows it
const whiteColors = [
  '#F0F7F4',
  '#F7FFFB',
  '#F4F9FF',
  '#F9F6F4',
  '#F9FAFF',
  '#F9FDFF',
];
const orangeColors = [
  '#FF6C2D',
  '#FF970F',
  '#FF8E32',
  '#F46100',
  '#F98500',
  '#F98800',
];
const greenColors = [
  '#4ECE6C',
  '#4B7F52',
  '#96E8BC',
  '#B6F9C9',
  '#C9FFE2',
  '#C9FFE6',
];
const yellowColors = [
  '#F3E37C',
  '#F2DB48',
  '#EDD642',
  '#F2D937',
  '#F2E8AF',
  '#F2E8A7',
];  
const redColors = [
  '#771828',
  '#971220',
  '#501820',
  '#BE1930',
  '#DD1D35',
  '#DD213C',
];
const blueColors = [
  '#0200AF',
  '#1A36FF',
  '#0400FF',
  '#002096',
  '#5C08FF',
  '#5A0DC8',
];
const palettebackground = '	#e6e6e6';

return (
  <div style={ {background: palettebackground} } className="colors">

      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[0]} }>{ redColors[0] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[1]} }>{ redColors[1] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[2]} }>{ redColors[2] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[3]} }>{ redColors[3] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[4]} }>{ redColors[4] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: redColors[5]} }>{ redColors[5] }</div>

      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[0]} }>{ orangeColors[0] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[1]} }>{ orangeColors[1] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[2]} }>{ orangeColors[2] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[3]} }>{ orangeColors[3] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[4]} }>{ orangeColors[4] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: orangeColors[5]} }>{ orangeColors[5] }</div>
   
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[0]} }>{ yellowColors[0] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[1]} }>{ yellowColors[1] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[2]} }>{ yellowColors[2] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[3]} }>{ yellowColors[3] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[4]} }>{ yellowColors[4] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: yellowColors[5]} }>{ yellowColors[5] }</div>

      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[0]} }>{ greenColors[0] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[1]} }>{ greenColors[1] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[2]} }>{ greenColors[2] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[3]} }>{ greenColors[3] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[4]} }>{ greenColors[4] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: greenColors[5]} }>{ greenColors[5] }</div>

      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[0]} }>{ blueColors[0] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[1]} }>{ blueColors[1] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[2]} }>{ blueColors[2] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[3]} }>{ blueColors[3] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[4]} }>{ blueColors[4] }</div>
      <div className="paletteswhiteletters" style={ {width: 100, height: 100, background: blueColors[5]} }>{ blueColors[5] }</div>

      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[0]} }>{ whiteColors[0] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[1]} }>{ whiteColors[1] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[2]} }>{ whiteColors[2] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[3]} }>{ whiteColors[3] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[4]} }>{ whiteColors[4] }</div>
      <div className="palettes" style={ {width: 100, height: 100, background: whiteColors[5]} }>{ whiteColors[5] }</div>

        
  </div>
    );
  }
}

ReactDOM.render(
  <Colorpage />,
  document.getElementById('root')
);

export default Colorpage;