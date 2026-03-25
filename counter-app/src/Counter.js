import {useState} from 'react';
function Counter(){
    const [count , setCount] = useState(0);
    return(
        <div>
            <h2> Counter : {count}</h2>
            <button onClick={incrementCount}>Increment</button><br></br>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
    function incrementCount(){
        setCount(previousState => 
            {return previousState+1}
        );
    }
    function decrementCount(){
        setCount(previousState => 
            {return previousState-1}
        );
    }
}
export default Counter;