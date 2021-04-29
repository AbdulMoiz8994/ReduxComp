import React from 'react'

export const User = ({data}) => {
    console.log(data);
    return (
        <div>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}
