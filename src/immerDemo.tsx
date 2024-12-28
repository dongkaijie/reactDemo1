import React, { FC, useState } from 'react'
import {produce} from 'immer'

const Demo: FC = ()=>{
    const [userInfo, setUserInfo] = useState({age:18,name:'凯杰'})
    const changeAge = ()=>{
        setUserInfo(
            produce(draft=>{
                console.log('draft',draft);
                draft.age = 33
            })
        )
    }
    return(
        <>
        <h2>state 不可变数据</h2>
        <div>{JSON.stringify(userInfo)}</div>
        <button onClick={changeAge}>更改年龄</button>
        </>
    )
}

export default Demo