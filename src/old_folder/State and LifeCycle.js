import React, { Component } from 'react'

 class StateLifeCycle extends Component {
     constructor(props){
         super(props);
         this.state={
             seconds:0
         };
     }
     incrementCounter(){
         this.setState(
             (prevState1,props)=>({
                seconds: prevState1.seconds +1
             })
            );
     }
     componentDidMount(){
        this.timerID = setInterval(
            ()=> this.incrementCounter(),
    1000)
     }
     componentWillMount(){
        clearInterval(this.timerID);
     }
  render() {
    return (
      <div>
        <h1>This is a counting machine</h1>
        <h2>Seconds:{this.state.seconds} s</h2>
      </div>
    )
  }
}
export default StateLifeCycle;