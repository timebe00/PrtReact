import React from "react";
//  username, email, onChange, onCreate를 parpams로 받아온다.
function CreateUSer({ username, email, onChange, onCreate}) {
    return (
        <div>
            {/*input값 안에 username이라는 이름으로 내용을 써준다.*/}
            <input
                name="username"
                placeholder="계정명"
                onChange ={onChange}
                value={username}
            />
            {/*input값 안에 email이라는 이름으로 내용을 써준다.*/}
            <input
                name="email"
                placeholder="이메일"
                onChange ={onChange}
                value={email}
            />
            {/*클릭 시 onCreate 함수 호출*/}
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUSer