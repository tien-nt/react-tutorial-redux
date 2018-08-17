import React,{Component} from 'react';
import {connect} from 'react-redux';


class FoodDetail extends Component{
    render(){
     return(
     <div>
        <img src={this.props.activeFood.imageUrl ? 'http://'+ this.props.activeFood.imageUrl:''}
            height={this.props.activeFood.imageUrl ? 200:0}
            width={this.props.activeFood.imageUrl ? 200:0} 
            alt={this.props.activeFood.name}
            />
            <p>Name:{this.props.activeFood.name}</p>
            <p>Description:{this.props.activeFood.description}</p>
    </div>
    );
    }
}
function mapStateToProps(state){
    return{
        activeFood:state.activeFood
    };
}
// container components to connnect the presentational components to redux;
let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;