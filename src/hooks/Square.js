import { useState } from 'react';

// Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

const SquareHooks = ({ color }) => {
    let [green, setGreen] = useState(true); // set green to true
    
    // method function goes here...
    let handleClick = () => setGreen(
        green = !green //toggle (if its not green change)
    );

    let squareColor = green ? 'green' : color; //is it green if so then green, else use color prop from App

    return (
        <div onClick ={ handleClick } 
        style = {{
            height: '200px',
            width: '200px',
            background: squareColor, //Using variable here to put green or pink prop color in.
        }} /> 
    ) 

}

export default SquareHooks;

