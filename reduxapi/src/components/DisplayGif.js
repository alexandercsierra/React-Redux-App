import React from 'react'
import {connect} from 'react-redux'
import {getGif} from '../actions'
import styled from 'styled-components'
import pug from '../imgs/pug.jpg'
import cat from '../imgs/cat.jpg'

const Div = styled.div`
    // border: 1px solid red;
`;

const Button = styled.button`
    width: 30%;
    height: 15%;
    padding: 1% 2%;
    margin-bottom: 4%;
    // margin-right: 4%;
    font-size: 1rem;
    font-weight: 700;
    // background: #ffb142;
    background: #34ace0;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    cursor: pointer;

    &:hover {
        color: #34ace0;
        background: white;
        border: 3px solid #34ace0;
    }
`;

const GifDiv = styled.div`
    // box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    margin-top: 4%;
    // marginauto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
`;

const Img = styled.img`
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const P = styled.p`
    // border: 1px solid black;
    width: 50%;
    font-size: 1.3rem;
    text-shadow: 2px 2px #000;
    // box-shadow: 0.3em 0.3em 1em rgba(200,200,200,1);
    color: white

`;

const Banner = styled.div`
    background-image: url(${pug});
    background-size: cover;
    background-position: 50% 50%;
    // width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
`;

const TitleDiv = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 4%;
    // padding-bottom: 4%;
`;

const Title = styled.h1`
    // margin-top: 0;
    color: white;
    text-shadow: 2px 2px #000;
`;

const CTADiv = styled.div`
    // border: 1px solid green;
    height: 80%;
    width: 30%;
`;

const TitleP = styled.p`
    // border: 1px solid black;
    // width: 50%;
    font-size: 1.1rem;
    text-shadow: 2px 2px #000;
    // box-shadow: 0.3em 0.3em 1em rgba(200,200,200,1);
    color: white
`;


const DisplayGif = props => {
    // console.log("from DisplayGif", props.gif)
    return (
        <Div>
            <Banner>
                <TitleDiv>
                    <CTADiv>
                        <Title>Random Gifs</Title>
                        <TitleP>Don't be a sad pug.<br></br> Get a gif you cheer you up!</TitleP>
                        <Button onClick={props.getGif}>GET GIF</Button>
                    </CTADiv>
                </TitleDiv>
            </Banner>
            
            
            {props.isLoading && <h1>LOADING...</h1>}
            {props.gif && <GifDiv>
                
                <Img src={props.gif.image_url}/>
                <P>{props.gif.title}</P>
                </GifDiv>}
            
        </Div>
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