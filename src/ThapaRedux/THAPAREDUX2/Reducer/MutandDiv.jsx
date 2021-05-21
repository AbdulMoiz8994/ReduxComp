import React from 'react'

const initialValue=5
export const MutandDiv = (state=initialValue,action) => {
     switch(action.type){
        case  'MULTIPLY': return state * action.payload;
         case 'DIVISION': return state / action.payload;   
            default:
                return state
     }

}
