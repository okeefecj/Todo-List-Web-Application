import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'


class CounterButton extends Component {

    //Define the initial state in a constructor
    //state => counter 0

    // constructor(){
    //     super(); //Must include this before using 'this.'
    // } 
    

    render() {
        return(
            <div className="counterButton">
            <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by}</button>
            <button onClick={() =>this.props.decrementMethod(this.props.by)}> -{this.props.by}</button>
            </div>
        )
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton