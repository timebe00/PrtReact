import React from 'react'
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
      <UserList/>
    </div>
  );
}

export default App;
