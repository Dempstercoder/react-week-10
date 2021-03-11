import { useState } from 'react';

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

const TempConverter = () => {
    let [celsius, setCelsius] = useState("0") 
    let [fahrenheit, setFahrenheit] = useState("32")


    let handleChangeCelsius = (e) => {
        let inputValue = e.currentTarget.value; // e.currentTarget is what the user has typed in.
      
            setCelsius(`${inputValue}`); //changing state of input value, state changes along with what user has typed in.
            setFahrenheit(inputValue * 1.8 + 32); // Convert from Celsius to Fahrenheit
        }

    let handleChangeFahrenheit = (e) => {
        let inputValue = e.currentTarget.value; // e.currentTarget is what the user has typed in.

            setFahrenheit(`${inputValue}`);
            setCelsius((inputValue - 32 / 1.8)); // Convert from Fahrenheit to Celsius
        }
  

    return (
        <form className="form-group">
            <label>F</label>
            <input className="form-control" value={ fahrenheit } onChange={ handleChangeFahrenheit } type="number"/>

            <label>C</label>
            <input className="form-control" value={ celsius } onChange={ handleChangeCelsius } type="number"/>
        </form>
        );
}

export default TempConverter;


