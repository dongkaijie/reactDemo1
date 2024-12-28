import React, { FC, useState,useEffect } from 'react'
import QuestionCard from "./components/questionCard.tsx";
import {produce} from 'immer'

const List3: FC = () => {
    useEffect(()=>{
        console.log('发起请求');
        
    },[])
    const [questionList,setQuestionList] = useState([
        {id:'q1', title:'问卷11', isPublished: false},
        {id:'q2', title:'问卷2', isPublished: true},
        {id:'q3', title:'问卷3', isPublished: false},
        {id:'q4', title:'问卷4', isPublished: true},
    ])

    const newAdd = ()=>{
        const r = Math.random().toString().slice(-3)
        // 1、传统方式
        // setQuestionList([...questionList,{id: r,title:'问卷'+r,isPublished:false}])
        // 2、produce方式
        setQuestionList(produce(draft => {
            draft.push({
                id: r,title:'问卷'+r,isPublished:false
            })
        }))
        
    }
    const publishQuestion = (id: string)=>{
        // setQuestionList(
        //     questionList.map(v=> {
        //         return v.id === id ? {...v, isPublished:true} : {...v}
        //     })
        // )
        setQuestionList(
            produce(draft =>{
                // 方式1
                // const index = draft.findIndex(v=> v.id === id)
                // draft[index].isPublished = true
                // 方式2
                const q = draft.find(item=>item.id == id)
                if(q) q.isPublished = true
            })
        )
    }
    // 删除
    const deleteQuestion = (id:string)=>{
        console.log('id',id)
        // setQuestionList(
        //     [...questionList].filter(v=> v.id !== id)
        // )
        setQuestionList(produce(draft =>{
            const index = draft.findIndex(v=> v.id === id)
            draft.splice(index,1)
        }))
    }
    return (
        <div>
            <h1>问卷列表页2</h1>
            <div>
                {
                    questionList.map(question => {
                         // 方式1
                    // const { id, title, isPublished,} = question;
                    // return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />

                    // 方式2
                    const { id } = question;
                    return <QuestionCard key={id} deleteQuestion={deleteQuestion} publishQuestion={publishQuestion} {...question} />
                    })
                }
            </div>
            <div>
                <button onClick={newAdd}>新增问卷</button>
            </div>
        </div>
    )
}
export default List3