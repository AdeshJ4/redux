//custom state logic
const initialState = 0;

const reducer_1 = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
            break;
        case "DECREMENT":
            return state - 1;
            break; 
        default:
            return state;
            break;
    }
}

export default reducer_1;