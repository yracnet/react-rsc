import React from 'react'
import { useDispatch } from 'react-hsc';

export const CounterButtons = () => {
    const dispatch = useDispatch();
    const onClick = (type) => {
        const action = { type }
        dispatch(action)
    }
    return (
        <div>
            <button onClick={e => onClick("++")}>+1</button>
            <button onClick={e => onClick("--")}>-1</button>
        </div>
    )
}