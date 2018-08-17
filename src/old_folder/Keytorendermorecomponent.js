import React, { Component } from 'react'

function ListItem(props){
    return <li>{props.value}</li>
}
//const animals = ["lion","tuger","dog","cat","dinosaur"];
export class KeyComponent extends Component {
 constructor(props){
     super(props);
this.listItem = props.animals.map(
    (animal,index)=> <ListItem key={animal.id} value={index.toString()+"-"+animal.title}/>
)
handleS
 }

  render() {
    return (
      <div>
        <ul>{this.listItem}</ul>
      </div>
    )
  }
}


export default KeyComponent;
