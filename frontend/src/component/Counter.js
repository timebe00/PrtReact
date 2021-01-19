// import React, { useState } from "react";
import React, { useReducer } from "react";

//  dispatch에서 사용하는 변수/함수를 state에 넣고 넘겨준 변수 값을 action에 넣는다.
function reducer(state, action) {
    console.log(action)
    //  action에 type에 따라 변화한다.
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default :
            return state ;
    }
}

function Counter() {
    // //  setNumber라는 함수로 number사용하기
    // //   useState(0)은 number의 초기 값을 0으로 설정한다.
    // const [number, setNumber] = useState(0);
    // //  함수 사용하기
    // const onIncrease = () => {
    //     setNumber(preNumber => preNumber + 1)
    // }
    // //  함수 사용하기
    // const onDecrease = () => {
    //     setNumber(preNumber => preNumber - 1)
    // }

    //  number이라는 변수는 dispatch를 써서 사용하고 이를 reducer에서 이를 사용 관리한다.
    //  초기값 : 0
    const [number, dispatch] = useReducer(reducer, 0);

    //  onIncrease 함수 선언
    const onIncrease = () => {
        //  타입을 INCREMENT로 넘겨준다.
        dispatch({ type: 'INCREMENT' })
    }

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' })
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