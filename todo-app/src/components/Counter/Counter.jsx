import React, {Component} from 'react'
import './Counter.css'
import CounterButton from './CounterButton.jsx'
// import PropTypes from 'prop-types'


class Counter extends Component {

    constructor(){
        super(); //Must include this before using 'this.'

        this.state = {
            count : 0
        }
    } 

    render() {
        return (
          <div className="count">
            <CounterButton by={1}  incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.count}</span>
            <div> <button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        )
      
    }

    //Update state, counter++
    increment = (by) => {
       
        this.setState
        (
            (prevState) => 
            {return {count: prevState.count + by}}
        );
        
    }

    decrement = (by) => {
        
        this.setState(
            (prevState) => {
                return {count: prevState.count - by}
            }
        )
    }

    reset = ()  => {
        this.setState(
           (prevState) => {
               return {count: 0}
           }
                
            
        )
    }
}



export default Counter