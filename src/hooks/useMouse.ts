import { useState,useEffect,useCallback } from 'react'

// 获取鼠标的位置
function useMouse(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const mouseMoveHnader = useCallback((event: MouseEvent) => {
            setX(event.clientX)
            setY(event.clientY)
        }
    ,[])

    useEffect(()=>{
        // 鼠标监听事件
        window.addEventListener('mousemove',mouseMoveHnader)

        return ()=>{
            window.removeEventListener('mousemove',mouseMoveHnader)
        }
    })
    return {x,y}
}

export default useMouse