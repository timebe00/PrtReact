import React, {useRef} from 'react'
// import Hellow from './component/Hellow'
import './App.css'
// import Counter from './component/Counter'
// import Wrapper from './component/Wrapper';
import InputSample from './component/InputSample'
import UserList from './component/UserList'

function App() {
  //  스타일 넣기
  // const name = 'react';
  // const style ={
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding : '1rem'
  // }

  //  users정보
  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
  ];

  // 추가 시 4번째 부터 시작이라고 돔에 추가
  const nextId = useRef(4);
  //  추가시 호출 할 함수
  const onCreate = () => {

    //  추가 이후 5번째로 추가
    nextId.current += 1
  }

  return (
    <div>
      {/*<Wrapper> 넣기*/}
      {/* <Wrapper> */}
        {/* props로 넘기기 */}
        {/* <Hellow name="react" color="red" isSpecial/> */}
        {/* <Hellow color="pink"/> */}
      {/* </Wrapper> */}
      {/* <div style={style}>{name}</div> */}
      {/* <div className="gray-box"></div> */}
      {/* <Counter/> */}
      {/* <InputSample/> */}
      {/*users 정보를 parpam로 넘기기*/}
      <UserList users = {users}/>
    </div>
  );
}

export default App;
