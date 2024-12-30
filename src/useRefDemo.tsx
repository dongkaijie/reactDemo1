import React, { FC, useRef,
    // useState
} from 'react'

const Demo: FC=()=>{
    const inputRef = useRef<HTMLInputElement>(null)
    const selectInput = () => {
        console.log('inputRef',inputRef)
        const inputElem = inputRef.current
        if(inputElem) inputElem.select()
    }
// const [value,setValue] = useState
    const chaInputVal = ()=>{
        // 以下不会触发render更新
        // inputRef.current = '你好啊,江海红'
        console.log('inputRef.current ',inputRef.current );
        console.log('inputRef.current ',inputRef.current.value );
        // 这个会触发更新
        inputRef.current.value = '你好啊,江海红'


        
    }
    return (
        <div>
            <input ref={inputRef} defaultValue="hello world" />
            <button onClick={selectInput}>选中 input</button>&nbsp;
            <button onClick={chaInputVal}>改变值</button>
        </div>
    )
}

export default Demo