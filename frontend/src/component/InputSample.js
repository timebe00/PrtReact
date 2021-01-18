//  useRef 로 Dom설정하기
import React, { useState, useRef } from 'react';

function InputSample() {
    // //  text 초기값 ''
    // const [text, setText] = useState('');
    // //  바뀌었으면 그 값을 넣어놔라
    // const onChange = (e) => {
    //     console.log("e : ")
    //     console.log(e)
    //     setText(e.target.value)
    // };
    // //  초기화 시 값을 전부 다 비워라
    // const onReset = () => {
    //     setText('');
    // }
    
    //  name, nickname을 setInputs로 불른다.
    //  name 기본값 : ''
    //  nickname 기본값 : ''
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    //  nameInput이 있는 것을 Dom으로 설정
    const nameInput = useRef();

    //  이후 name,nickname 값은 inputs안에 있는 값으로 설정
    const { name, nickname } = inputs;

      
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            //  기존의 input 객체를 복사한 뒤
            ...inputs,
            //  name 키를 가진 값을 value 로 설정
            [name]: value 
        })
    }

    //  name과 nickname값 초기화
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }
    return (
        <div>
            {/* <input onChange={onChange} value={text} /> */}
            {/* <button onClick={onReset}>초기화</button> */}
            {/* <div> */}
                {/* <b>값 : {text}</b> */}
            {/* </div> */}
            
            {/* Dom 으로 설정 */}
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}, ({nickname})
            </div>
        </div>
    )
}

export default InputSample;