import React from 'react';
import { LeftQuestionBar } from './LeftQuestionBar';
import { RightQuestionStatus } from './RightQuestionStatus';

export const QuestionList = ({questionData, setQuestionData}) => {
    return (
        <div className='w-[80%] m-auto  min-h-[80vh] flex'>
            <LeftQuestionBar questionData={questionData} setQuestionData={setQuestionData} />
            <RightQuestionStatus questionData={questionData} />
        </div>
    )
}