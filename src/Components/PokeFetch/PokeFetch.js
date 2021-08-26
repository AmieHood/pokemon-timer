import React, { Component } from 'react'
import './PokeFetch.css';


class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      count: 0,
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
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
          count: 10
        })
        this.startTimer()
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  startTimer = () => {
    console.log(this.state);
    let timeLeft = 10

    let timer = setInterval(() => {
      if(this.state.count > 0){
        this.setState(prevState => ({
          count: prevState.count - 1
        }))
        document.getElementById("progressBar").value = 11 - timeLeft;
        timeLeft -= 1;
      } else {
        clearInterval(timer)
      }
    }, 1000);
    console.log(this.state.time);
  }  

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon() && this.startTimer()}>Start!</button>
        <h1 className={'timer'} ><progress value="0" max="10" id="progressBar"></progress></h1>
        
        <div className={'pokeWrap'}>
          {this.state.count >0 ? (
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
          }
        </div>
      </div>
    )
  }
}

export default PokeFetch;