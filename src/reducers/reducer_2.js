const initialState = 'blue';
const reducer_2 = (state = initialState, action) => {
    switch(action.type){
        case "black":
            return state = 'white';
            break;

        default:
            return state;
            break;
    }
}

export default reducer_2;