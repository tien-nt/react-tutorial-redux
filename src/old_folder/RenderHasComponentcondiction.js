import React, { Component } from 'react'

// class c extends Component {
//     constructor(props){
//         super(props);
//         this.state = {isLoggedIn:true};
//     }

//     handleLogout=()=>{
//         this.setState({isLoggedIn:false});
//     }
//     handleLoin=()=>{
//         this.setState({isLoggedIn:true});
//     }
//   render() {
//     let myButton = null;
//     let title = null;
//     if(this.state.isLoggedIn){
//         myButton = <button onClick={this.handleLogout}>Logout</button>
//     }else{
        
//         myButton = <button onClick={this.handleLoin}>Login</button>
//     }
//     title = this.state.isLoggedIn?<h1>Logged in</h1>:<h1>Logged out</h1>
//     return (
//       <div>{title}{myButton}</div>
        
//     )
//   }
// }

class RenderCompoent extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
        <div>
            <h1>Mail statistics</h1>
            {
                this.props.newMessages.length>0 &&
                <h2>
                    you have {this.props.newMessages.length} new messages
                </h2>
            }
        </div>
        )
    }
}
export default RenderCompoent;