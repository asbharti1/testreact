import React, { useState, useCallback } from "react";
const MemoizedComponent = React.memo(({value}) => {
    console.log('Memozed component re;render')
});

const App = () =>{
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('button Clicked');
        setCount(count +1);
    },[count]);

    console.log('parent cmp rerender');
    return(
        <>
        <button onClick={handleClick}>Click Me</button>
        <MemoizedComponent value={count}/>
        </>
        
    )
}