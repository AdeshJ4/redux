import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (current_state, action ) => {
    //custom state logic 
    console.log(current_state, action);
    if (action.type === "INCREMENT") {
        return current_state + 1;
    }
    if (action.type === "DECREMENT") {
        return current_state - 1;
    }
}

const Start_1 = () => {
    const [ current_state, dispatch ] = useReducer(reducer, initialState);

    const increment = () => {
        return dispatch({type: "INCREMENT"});
    }

    const decrement = () => {
        return dispatch({type: 'DECREMENT'});
    }

    return(
        <>
            <button type='button' onClick={increment}>+</button>
            {current_state}
            <button type='button' onClick={decrement}>-</button>
        </>
    );
}


export default Start_1