import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (current_state, action) => {
    //custom state logic
    if(action.type === "Increment"){
        return current_state + 1;
    }
    if(action.type === "Decrement"){
        return current_state - 1;
    }
}


const Start_2 = () => {
    const [ currentState, dispatch ] = useReducer(reducer, initialState);
    return(
        <>
            <button onClick={()=>dispatch({type: "Increment"})}>+</button>            
            {currentState}
            <button onClick={()=>dispatch({type: "Decrement"})}>-</button>
        </>
    );
}


export default Start_2;