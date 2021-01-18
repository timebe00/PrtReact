import React from 'react'

function Hellow({name, color, isSpecial}) {
    //  props로 넘기 값 사용하기
    return <div style={{color}}>{isSpecial && <b>*</b>}안녕하세요 {name}</div>
}

//  특정 props가 없을 경우 기본 값 설정하기
Hellow.defaultProps = {
    name: "이름없음"
}
export default Hellow