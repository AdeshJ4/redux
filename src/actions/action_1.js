//incNumber --> Action creator --> create action
//Action --> plain javascript object

export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
} 


export const decNumber = () => {
    return{
        type: "DECREMENT"
    }
}