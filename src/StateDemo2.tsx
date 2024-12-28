import React, {  FC,useState } from 'react'

const Demo: FC = ()=>{

    const [list, setList] = useState(['x','y'])

    const change = ()=>{
        // 方式1
        // setList(list.concat('z'))
        // 方式2
        setList([...list,'z'])

        // 方式3 不可行
        // setList(list.push('z')) // 这是不行的，不可变数据,不是修改 state的值,而是要传入一个新的值
    }

    return (
        <div>
            <h2>state 不可变数据</h2>
                <div>{JSON.stringify(list)}</div>
                <button onClick={change}> add item</button>
        </div>
    )
}


export default Demo