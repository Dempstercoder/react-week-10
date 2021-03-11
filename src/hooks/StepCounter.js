import { useState } from 'react';

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

const StepCounter = ({ max, step }) => {
    let [stepCounter, setStepCounter] = useState(0); //  initial state 0
    
    // method function goes here...
    let handleClickPlus = () => setStepCounter( //setStepCounter is setState
        stepCounter + (stepCounter < max ? step : 0)     
     ); // Is number less 100? Then 0 + 1 = 1  now stepCounter is 1. Is less than 100? Then 1 + 1 = 2

    let handleClickMinus = () => setStepCounter(
        stepCounter - (stepCounter > 0 ? step : 0) 
    ); // Is number more than 0? Then minus 1, else nothing happens.


    return (
        <>
                <p className="card card-body">{ stepCounter }</p>
                {/* stepCounter variable put in here from let stepCounter. */}

                <button 
                onClick={ handleClickMinus } 
                className="btn btn-primary">-</button>

                <button 
                onClick={ handleClickPlus } 
                className="btn btn-primary">+</button>
                </>
    ) 
}

export default StepCounter;
