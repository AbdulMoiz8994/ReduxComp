// import React from 'react' 
// This is reducer
const initialValue=0;
 export const UseReducer=(state=initialValue,action) =>{
     switch(action.type){
         case 'INCREMENT': return state + action.payload; 
         case 'DECREMENT': return state - action.payload;
           default:
               return state  
     }
 }