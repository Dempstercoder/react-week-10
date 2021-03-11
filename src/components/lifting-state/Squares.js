// Create a component <Squares color="hotpink"> that displays two of your <Square> components from last week and passes through the color prop. As before, when clicked the background colour should change. But only one of the <Square>s should show the given colour at once. You'll need to turn your squares back into stateless components.

// This has all the state because it's the parent component

// Parent Component 
import { Component } from 'react';
import Square from './Square';


class Squares extends Component {
    constructor(props) {

        super(props);

        this.state = {
            selected: 1, 
            };

            this.setSelected = this.setSelected.bind(this);
        }

        setSelected(value) {
            this.setState({selected: value});
        }

     

        render() {

            let { color } = this.props;
            let { selected } = this.state; // pulling selected property out of state object. Deconstructing the prop selected.


            return (
                <>
                {/* square One */}
                    <Square 
                        selected={ selected === 1 } 
                        color={ color }
                        handleClick={() =>this.setSelected(1)}
                    />
                  
              
                {/* square Two */}
                    <Square 
                        selected={ selected === 2 } 
                        color={ color }
                        handleClick={() =>this.setSelected(2)}
                    />
                      
                 
               
                {/* square Three */}
                    <Square 
                        selected={ selected === 3 } 
                        color={ color }
                        handleClick={() =>this.setSelected(3)}
                    />
       
                </>
                
            )
            }
        }
    
     
    export default Squares;
