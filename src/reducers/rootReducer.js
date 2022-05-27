//every redux store has a single root reducer function

import reducer_1 from "./reducer_1";//reducer no 1
// import reducer_2 from "./reducer_2"; //reducer no 2

//you need something to wrap all reducers
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        reducer_1
    // reducer_2
})


export default rootReducer;
