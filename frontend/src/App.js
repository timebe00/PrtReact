//  20번 확인 후 주석달기


//  최적화 관련 함수
//  useMemo : 특정 값 결과 값 재사용
//  useCallback : 새로 만들지 않고 재사용

import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react'
// import Hellow from './component/Hellow'
// import './App.css'
import CreateUSer from './component/CreateUsers';
// import Counter from './component/Counter'
// import Wrapper from './component/Wrapper';
// import InputSample from './component/InputSample'
import UserList from './component/UserList'

//  users 배열을 받아온다.
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중');
  //  users에서 active가 true인 수를 세어 리턴한다.
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  //  users 함수 선언
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ]
};

//  변수/함수 값을 state를 넣고 함께 온 변수/함수 값을 action에 넣는다.
function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT' :
      return {
        //  state에 넣어있는 값을 전부 다 펼친다.
        ...state,
        inputs: {
          //  state.inputs을 전부 다 펼친다.
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER' :
      return {
        inputs: initialState.inputs,
        usersd: state.users.concat(action.user)
      };

    case 'TOGGLE_USER' :
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active : ! user.active } : user
        )
      };

    case 'REMOVE_USER' :
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    
    default:
      return state;
  }
}

function App() {
  //  스타일 넣기
  // const name = 'react';
  // const style ={
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding : '1rem'
  // }

  //  inputs 값을 setInputs라는 함수로 사용
  //  inputs안에 있는 username와 email의 초기값은 ''
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // })

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = userRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  //  inputs에 있는 username, email을 username, email으로 사용하기
  // const{ username, email } = inputs;

  const onChange = useCallback(e => {
    //  name과 같은 값에 내용 가져오기
    //  ex) name = "email" 시 email이라는 키로 값 집어 넣기
    const {name, value} = e.target;
    //  setInputs에 그 내용 집어넣기
    // setInputs({
    //   ...inputs,
    //   [name]: value
    // })

    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  },[]);
  //  users정보
  // const [users, setUsers] = useState([
  //   {
  //       id: 1,
  //       username: 'velopert',
  //       email: 'public.velopert@gmail.com',
  //       active: true
  //   },
  //   {
  //       id: 2,
  //       username: 'tester',
  //       email: 'tester@example.com',
  //       active: false
  //   },
  //   {
  //       id: 3,
  //       username: 'liz',
  //       email: 'liz@example.com',
  //       active: false
  //   }
  // ]);

  // 추가 시 4번째 부터 시작이라고 돔에 추가
  // const nextId = useRef(4);
  //  추가시 호출 할 함수
  const onCreate = useCallback(() => {
    // const user = {
    //   //  id를 기준으로 정리
    //   //  username, email 추가하기
    //   id: nextId.current,
    //   username,
    //   email
    // };
    // setUsers(users.concat(user));
    // //  username, email 초기화
    // setInputs({
    //   username: '',
    //   email: ''
    // });
    // //  추가 이후 5번째로 추가
    // nextId.current += 1

    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email])

  // const onRemove = useCallback(
  //   id => {
  //   //  user.id 값과 지정된 id값이 같이 않는 원소만 추출해서 새로운 배열을 만듬
  //   //  새로운 배열을 users에 적용시켜 지정된 user.id를 삭제함
  //   setUsers(users.filter(user => user.id !== id));
  // }, [users]);

  // const onToggle = useCallback(
  //   id => {
  //   setUsers(
  //     users.map(user =>
  //         //  user.id === id가 true라면 user에 있는 active(없다면 생성한다.)를 not을 붙여서 다시 넣는다.
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //   )
  // },[users])

  const onTiggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  },[]);

  const onRemove = useCallback(id => {
    dispatch({
      type : 'REMOVE_USER',
      id
    })
  },[])

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <>
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
      <CreateUSer
        username={username}
        email={email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList 
        users = {users} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
