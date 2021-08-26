import React, { Component } from 'react'
import './PokeFetch.css';
import Timer from '../Timer';


class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      // time: 0,
      // isOn: false,
      // start: 0,
      brightness: 0
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        // this.timer()
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.timer = setTimeout(() => {this.state, 10000})
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  //   console.log(timer);
  // }

//   startTimer = (i) => {
//     // this.setState({timeRemaining: this.state.timeRemaining -1})
//     console.log(this.state);
//     this.setState({
//       isOn: true,
//       time: this.state.time,
//       start: Date.now() - this.state.time
//     })
//     this.timer = setInterval(() => this.setState({
//       time: Date.now() - this.state.start
//     }), 1)
//     // setInterval(function(){
//     // if(this.state.timeRemaining <= 0){
//     //     clearInterval();
//     // } else {
//     //     document.getElementById("progressBar").value = 10 - this.state.timeRemaining;
//     //     this.state.timeRemaining -= 1;
//     // }}, 1000);
//     // console.log(this.state.timeRemaining);
// }  

//   resetTimer = (x) => {
//     this.setState({time: 0, isOn: false})
//   }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon() && this.startTimer()}>Start!</button>
        {/* <h1 className={'timer'} >{timer}</h1> */}
        <Timer />
        <div className={'pokeWrap'}>
          {/* {timer ? (
          <>
          <img className={'pokeImgDark'} src={this.state.pokeSprite} />
          </>
          ) :
          (
          <> 
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
          </>
          )
          } */}
          <> 
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
          </>
        </div>
      </div>
    )
  }
}

export default PokeFetch;