// Create a component <Squares color="hotpink"> that displays two of your <Square> components from last week and passes through the color prop. As before, when clicked the background colour should change. But only one of the <Square>s should show the given colour at once. You'll need to turn your squares back into stateless components.

// This has no state as it's a child component

// Child Component 
const Square = ({ selected, color, handleClick}) =>  { // three props

    let squareColor = selected ? color : 'purple'
// has square been selected? IF SO, IT Will be hot pink, else purple.

    return (
                
                
        <div onClick ={ handleClick } style = {{
            height: '200px',
            width: '200px',
            background: squareColor,
            }} /> 
    )
           
}
    
    
    export default Square;



// handleclick is passed in from the handleclick method int the parent component in return

