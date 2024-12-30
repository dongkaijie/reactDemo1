import { useState, useEffect } from 'react'

function getInfo(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(Date.now().toString() +'110120')
        },1500)
    })
}

const useGetInfo = ()=>{
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState('')

    useEffect(()=>{
        getInfo().then(info=>{
            setLoading(false)
            setInfo(info)
            // setLoading(true)

        })
    },[])

    return {loading,info}
}

export default useGetInfo