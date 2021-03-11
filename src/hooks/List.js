import { useState } from 'react';

// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

const ListHooks = () => {
    let [value, setValue] = useState('');
    let [items, setItems] = useState([]);

    
    let handleChange = (e) => {
        let input = e.currentTarget.value; // e.currentTarget is what the user has typed in.
      
        setValue(`${input}`); //changing state of input value, state changes along with what user has typed in.
        }

    let handleSubmit = (e) => {
        e.preventDefault()
        let input = e.currentTarget.value; // e.currentTarget is what the user has typed in.
        
        setValue(''); //changing state of input value, state changes along with what user has typed in.
        setItems([...items, value]);
        }


    return (
        <>
            <form class="form-group" onSubmit={ handleSubmit }>
                <input id="todo" onChange={ handleChange } class="form-control" value={ value } />
                <button className="btn btn-outline-info btn-lg">All wishes typed in come true...</button>
            </form>

            <ul className= "list-group"  >
                {items.map((item, index) => (
                    <li className="list-group-item" key={ index }>{ item }</li>
                ))
                }
            </ul>
        </>
    )
}
        
    
export default ListHooks;
