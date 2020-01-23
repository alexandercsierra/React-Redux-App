import React from 'react'
import {connect} from 'react-redux'
import {getGif} from '../actions'


const DisplayGif = props => {
    // console.log("from DisplayGif", props.gif)
    return (
        <div>
            DisplayGif
            <button onClick={props.getGif}>Get a random gif</button>
            {props.isLoading && <h1>LOADING...</h1>}
            {props.gif && <div>
                
                <img src={props.gif.image_url}/>
                <p>{props.gif.title}</p>
                </div>}
            
        </div>
    )
}

const mapPropsToState = state => {
    return {
        isLoading: state.isLoading,
        gif: state.gif,
        error: state.error
    }
}


export default connect(mapPropsToState, {getGif})(DisplayGif)