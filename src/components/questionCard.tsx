import React, { FC } from 'react'
import './questionCard.css'

// ts自定义类型
type PropsType = {
    id: string
    title: string
    isPublished: boolean
    deleteQuestion: (id: string) => void // void表示没有返回值，如果返回string,就写string
    publishQuestion: (id: string) => void // void表示没有返回值，如果返回string,就写string
}
const QuestionCard: FC<PropsType> = props =>{
    // console.log('pops',props);
    const {id, title, isPublished,deleteQuestion,publishQuestion } = props
    
    function publish(id: string) {
        publishQuestion(id)
    }
    function del(id: string){
        deleteQuestion(id)
    }
    const style = { color: "green" };
        return (
            <div key={id} className="list-item">
                <strong>{title}</strong>
                &nbsp;
                {/* 条件判断 */}
                {isPublished ? (
                    <span style={style}>已发布</span>
                ) : (
                    <span>未发布</span>
                )}
                &nbsp;
                <button onClick={()=>{publish(id)}} >发布问卷</button>
                &nbsp;
                <button onClick={() => {del(id)}}>删除问卷</button>
            </div>
        );
}

export default QuestionCard