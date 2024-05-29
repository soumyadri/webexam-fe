import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuestionList } from '../Components/QuestionList';
import { QuestionPaperDetails } from '../Components/QuestionPaperDetails';
import { basePath } from '../api';

export const Examination = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const subject = queryParams.get('subject');
    const [questionData, setQuestionData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchSubjectData() {
        try {
            const response = await axios.get(`${basePath}question/all/${subject}`);
            const data = response.data.data;
            setQuestionData(() => data);
            setLoading(() => false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (subject) {
            fetchSubjectData();
        };
    }, [subject]);

    if (loading) {
        return <div>Loading ...</div> 
    }

    return (
        <div className='bg-gradient-to-b from-white to-slate-200'>
            <QuestionPaperDetails subject={subject} questionData={questionData} />
            <QuestionList questionData={questionData} setQuestionData={setQuestionData} />
        </div>
    );
};