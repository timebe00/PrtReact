import React, { useState } from "react";

function Counter() {
    //  setNumber라는 함수로 number사용하기
    //   useState(0)은 number의 초기 값을 0으로 설정한다.
    const [number, setNumber] = useState(0);
    //  함수 사용하기
    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1)
    }
    //  함수 사용하기
    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;