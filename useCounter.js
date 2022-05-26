import { useState } from 'react';

export const useCounter = (initialState, base) => {
    const [count, setCount] = useState(initialState)


    const increment = () => {
        setCount(count + base)
    }
    const decrement = () => {
        if (count <= initialState) {
            setCount(initialState)
        } else
            setCount(count - base)
    }
    const reset = () => {
        setCount(initialState)
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
};
