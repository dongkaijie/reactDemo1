import React, { FC } from "react";

import QuestionCard from "./components/questionCard.tsx";
import StateDemo from "./StateDemo.tsx"
import StateDemo2 from "./StateDemo2.tsx"
// TS类型
const List1: FC = () => {
    const questionList = [
        { id: "q1", title: "问卷1", isPublished: false },
        { id: "q2", title: "问卷2", isPublished: true },
        { id: "q3", title: "问卷3", isPublished: false },
        { id: "q4", title: "问卷4", isPublished: true },
    ];
    
    return (
        <div>
            <h1>问卷调查页面</h1>
            <div>
                {questionList.map((question) => {
                    // 方式1
                    // const { id, title, isPublished,} = question;
                    // return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />

                    // 方式2
                    const { id } = question;
                    return <QuestionCard key={id} {...question} />
                })}
            </div>
            <div>
                    <StateDemo />
                    <StateDemo2 />
            </div>

        </div>
    );
};

export default List1;
