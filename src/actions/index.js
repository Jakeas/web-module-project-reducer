export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_CLEAR = "MEMORY_CLEAR"
export const MEMORY_PLUS = "MEMORY_PLUS"
export const MEMORY_R = "MEMORY_R"


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return(
    {type:CHANGE_OPERATION, payload: operator}
    )
}
export const clearDisplay = (number) => {
    return(
    {type:CLEAR_DISPLAY, payload:number}
    )
}
export const memoryPlus = () => {
    return(
    {type: MEMORY_PLUS}
    )
}
export const memoryR = () => {
    return(
    {type: MEMORY_R}
    )
}
export const memoryClear = (number) => {
    return(
    {type: MEMORY_CLEAR, payload:number}
    )
}