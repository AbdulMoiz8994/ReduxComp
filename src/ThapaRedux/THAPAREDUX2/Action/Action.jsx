
export const Multipy=(value) =>{
    return{
        type: 'MULTIPLY',
         payload: value
    };
};
export const Division=(value) =>{
    return{
        type: 'DIVISION',
        payload: value
    }
}