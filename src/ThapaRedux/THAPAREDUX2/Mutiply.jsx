import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Multipy,Division} from '../THAPAREDUX2/Action/Action'
export const Mutiply = () => {

const showInitialValue=useSelector(state => state.MutandDiv)
const dispatch=useDispatch()
    return (


        <div>
            <h1>Multi Comp</h1>

            <div>
                <button onClick={() => dispatch(Multipy(5))}> <span>X</span> </button>
                 <input type="text" name="quality" value={showInitialValue}/>
                <button onClick={() => dispatch(Division(5))}> <span>/</span> </button>
            </div>
        </div>
    )
}
