import React from 'react';
import { LeftQuestionBar } from './LeftQuestionBar';
import { RightQuestionStatus } from './RightQuestionStatus';

export const QuestionList = ({questionData}) => {
    return (
        <div className='w-[80%] m-auto bg-slate-100 min-h-[80vh]  flex gap-10'>
            <LeftQuestionBar questionData={questionData} />
            <RightQuestionStatus questionData={questionData} />
        </div>
    )
}