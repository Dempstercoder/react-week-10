import { useState } from 'react';

// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".

const ClickedHooks = () => {
    let [clicked, setClicked] = useState(false);

    // method function goes here...
    let handleClick = () => setClicked(
         clicked = !clicked //toggle
    ); 

    return (
        <p className="something" onClick ={  handleClick }>{ clicked ? 'clicked' : 'not clicked' }</p>
    ) // this is just determining if it's true or false, clicked or not clicked.

}

export default ClickedHooks;