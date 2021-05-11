import React from 'react'


export const IncNumber=(numb) =>{
    return{
        type: 'INCREMENT',
        payload: numb
    }  
}

export const DecNumber=(numb) =>{
    return{
        type: "DECREMENT",
        payload: numb
    }
}