import { useState } from 'react';

// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

const CounterHooks = ({ max }) => {
    let [counter, setCounter] = useState(50); //  initial state 0
    
    // method function goes here...
    let handleClickPlus = () => setCounter( //setCounter is setState
        counter + (counter < max ? 1 : 0)     
     ); // Is number less 100? Then 0 + 1 = 1  now counter is 1. Is less than 100? Then 1 + 1 = 2

    let handleClickMinus = () => setCounter(
        counter - (counter > 0 ? 1 : 0) 
    ); // Is number more than 0? Then minus 1, else nothing happens.



    return (
        <>
                <p className="card card-body">{ counter }</p>
                {/* counter variable put in here from let counter. */}

                <button 
                onClick={ handleClickMinus } 
                className="btn btn-primary">-</button>

                <button 
                onClick={ handleClickPlus } 
                className="btn btn-primary">+</button>
                </>
    ) 
}

export default CounterHooks;
