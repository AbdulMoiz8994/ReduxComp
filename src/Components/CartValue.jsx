import React from 'react'

export const CartValue = ({Data}) => {
    console.log("header data " , Data);
    return (
        <div>
            {Data.length}
        </div>
    )
}
