// Create a component <Password label="Password"> that contains an <input> with a <label>. 
// Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: 
// one should have the label "Password" and the other "Confirm Password". 
// Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

// Hint: If you don't remember it, go back over the Controlled Components material from last week first

import { Component } from 'react';



class SignUp extends Component {
    constructor(props) {
        super(props);


        this.state = {
            password: "",
            confirm: ""  // users box should be initally empty, empty string (therefore nothing in when user starts), along with the initial state that is default password="" input tag in return. 
        };

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let input = e.currentTarget.value // this is grabbing the thing that the user has typed into the box
        this.setState({value: input}) // we want to set the value to be what the user has typed in to input.
    } 


    render() {
        let { password } = this.state; // getting state object password, destructured for use below.
        let { confirm } = this.state; // getting state object confirm, destructured for use below.
        const valid = { confirm === password } && { password.length > minimumLength };

        return (
            <>
                <input onChange= {this.handleChange} type="text"/>
                    <p className="">{value.length}  {/* only need two sets of curly braces if it's an object inside */}
                </p>
                <label for="password">Password</label>


                <input onChange= {this.handleChange} type="text"/>
                    <p className="">{value.length}  {/* only need two sets of curly braces if it's an object inside */}
                </p>
                <label for="password">Confirm Password</label>
            </>
            );
    }
}

export default SignUp;