import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Counter() {
    const counter = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch({type:'up', step:2});
            }}>+</button> {counter}
        </div>
    );
}