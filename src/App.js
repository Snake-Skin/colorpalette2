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
 constructor (props)
 {super(props);
 this.state = {colors: [this.setState({MySpecialComponent})]}
}
  render (){
let colors = this.state.colors
    return (
      <div >
        <Palettes />
        {colors.map(colors => <footer className="App-footer">FAVORITES {colors.favorites}</footer>)}
      </div>
      
    );
  }
}


class MySpecialComponent extends Component {
  state = { toggled: false }
  
  render() {
    
    return (<div 
      className={ `${this.props.className} ${this.state.toggled ? 'favorites' : ''}`}
    onClick={ () => this.setState({ toggled: !this.state.toggled})}
    style={ {width: 120, height: 120, background: this.props.hex} }>
    { this.props.hex }
  
    </div>
    )
  }
}

class Palettes extends Component {
  render (){

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
      { redColors.map(hex => <MySpecialComponent hex={ hex } className='paletteswhiteletters'/>)}
      { orangeColors.map(hex => <MySpecialComponent hex={ hex } className='paletteswhiteletters'/>)}
      { yellowColors.map(hex => <MySpecialComponent hex={ hex } className='palettes'/>)}
      { greenColors.map(hex => <MySpecialComponent hex={ hex } className='palettes'/>)}
      { blueColors.map(hex => <MySpecialComponent hex={ hex } className='paletteswhiteletters'/>)}
      { whiteColors.map(hex => <MySpecialComponent hex={ hex } className='palettes'/>)}        
  </div>
    );
  }
}

ReactDOM.render(
  <Colorpage />,
  document.getElementById('root')
);

export default Colorpage;