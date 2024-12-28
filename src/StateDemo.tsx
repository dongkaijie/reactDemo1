import React, { FC, useState } from 'react'

const Demo: FC = ()=>{

    const [count, setCount] = useState(0)

    function add(){
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1) 不会被合并---还是1

        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1) // 这是会被合并的，点击一次就是累加4
        console.log('当前 count',count); // 异步的，打印出来的比实际呈现的大1
        
    }

    return (
        <div>
            <button onClick={()=>{add()}}>add{count}</button>
        </div>
    )
}

export default Demo