import React, { useEffect } from "react";

function User({user, onRemove, onToggle}) {
    //  이벤트 발생 시 나타남
    useEffect(() => {
        // console.log('컴포넌트가 화면에 나타남');
        // console.log(user);
        // return () => {
        //     console.log('컴포넌트가 화며에서 사라짐')
        //     console.log(user);

        // };
    });
    return (
        <div>
            {/*user.username과 user.email출력하기 */}
            <b
                style={{
                    cursonr: 'pointer',
                    color:user.active ? 'green': 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            {/*공백 출력*/}
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

//  user정보를 users로 받아온다.
function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {/*users의 정보를 하나씩 빼서 user에 넣고 사용한다. */}
            {/*키 값을 넣어주어서 하나 하나 인식해 준다. */}
            {users.map(user => (
                <User 
                    user={user} 
                    key = {user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default UserList;