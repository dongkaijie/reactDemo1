import React, { FC, useState } from 'react'
import QuestionCard from "./components/questionCard.tsx";

const List2: FC = () => {
    const [questionList,setQuestionList] = useState([
        {id:'q1', title:'问卷1', isPublished: false},
        {id:'q2', title:'问卷2', isPublished: true},
        {id:'q3', title:'问卷3', isPublished: false},
        {id:'q4', title:'问卷4', isPublished: true},
    ])

    const newAdd = ()=>{
        const r = Math.random().toString().slice(-3)
        setQuestionList(
            [
                ...questionList,
                {id: r,title:'问卷'+r,isPublished:false}
            ]
        )
    }
    const publishQuestion = (id: string)=>{
        setQuestionList(
            questionList.map(v=> {
                return v.id === id ? {...v, isPublished:true} : {...v}
            })
        )
    }
    // 删除
    const deleteQuestion = (id:string)=>{
        console.log('id',id)
        setQuestionList(
            [...questionList].filter(v=> v.id !== id)
        )
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
export default List2