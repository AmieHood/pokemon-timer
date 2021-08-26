import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            isOn: false,
            start: 0
        }        
    }

    startTimer = () => {
        // this.setState({timeRemaining: this.state.timeRemaining -1})
        console.log(this.state);
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1)
        // setInterval(function(){
        // if(this.state.timeRemaining <= 0){
        //     clearInterval();
        // } else {
        //     document.getElementById("progressBar").value = 10 - this.state.timeRemaining;
        //     this.state.timeRemaining -= 1;
        // }}, 1000);
        // console.log(this.state.timeRemaining);
    }  

    
      resetTimer = (x) => {
        this.setState({time: 0, isOn: false})
      }

    // timer = (i) => {
    //     this.setState({
    //         timeRemaining: this.state.timeRemaining -1,
    //         started: true
    //     })
    //     let downloadTimer = setInterval(function(){
    //     if(this.state.timeRemaining <= 0){
    //         clearInterval(downloadTimer);
    //     } else
    //         document.getElementById("progressBar").value = 10 - this.state.timeRemaining;
    //         this.state.timeRemaining -= 1;
    //     }, 1000);
    // }

    render(){
        let start = (this.state.time == 0)
        return(
            <div>
            <progress value="0" max="10" id="progressBar"></progress>
            </div>
        )
    }
}

export default Timer