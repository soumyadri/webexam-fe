import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../utils';
import axios from 'axios';
import { QuestionList } from '../Components/QuestionList';
import { QuestionPaperDetails } from '../Components/QuestionPaperDetails';

export const Examination = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const subject = queryParams.get('subject');
    const [questionData, setQuestionData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchSubjectData() {
        try {
            // const response = await axios.get(`${BASE_URL}/question/all/${subject}`);
            const response = {
                "data": [
                    {
                        "_id": "637fadc2feb26b1cceee3584",
                        "question": "Why JavaScript Engine is needed?",
                        "subject": "javascript",
                        "optionA": "Both Compiling & Interpreting the JavaScript",
                        "optionB": "Parsing the javascript",
                        "optionC": "Interpreting the JavaScript",
                        "optionD": "Compiling the JavaScript",
                        "answer": "Interpreting the JavaScript",
                        "credits": 2,
                        "__v": 0
                    },
                    {
                        "_id": "637faed9feb26b1cceee3588",
                        "question": "Which of the following scoping type does JavaScript use?",
                        "subject": "javascript",
                        "optionA": "Sequential",
                        "optionB": "Segmental",
                        "optionC": "Lexical",
                        "optionD": "Literal",
                        "answer": "Lexical",
                        "credits": 2,
                        "__v": 0
                    },
                    {
                        "_id": "6381e1b548ad635a7e304a9c",
                        "question": "Which of the following is not a framework?",
                        "subject": "javascript",
                        "optionA": "JavaScript .NET",
                        "optionB": "JavaScript",
                        "optionC": "Cocoa JS",
                        "optionD": "jQuery",
                        "answer": "JavaScript",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "6381e11b48ad635a7e304a96",
                        "question": "Which of the following methods/operation does javascript use instead of == and !=?",
                        "subject": "javascript",
                        "optionA": "JavaScript uses equalto()",
                        "optionB": "JavaScript uses equals() and notequals() instead",
                        "optionC": "JavaScript uses bitwise checking",
                        "optionD": "JavaScript uses === and !== instead",
                        "answer": "JavaScript uses === and !== instead",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "6381e0ab48ad635a7e304a94",
                        "question": "Why JavaScript Engine is needed?",
                        "subject": "javascript",
                        "optionA": "Both Compiling & Interpreting the JavaScript",
                        "optionB": "Parsing the javascript",
                        "optionC": "Interpreting the JavaScript",
                        "optionD": "Compiling the JavaScript",
                        "answer": "Interpreting the JavaScript",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "637fae67feb26b1cceee3586",
                        "question": "Arrays in JavaScript are defined by which of the following statements?",
                        "subject": "javascript",
                        "optionA": "It is an ordered list of values",
                        "optionB": "It is an ordered list of objects",
                        "optionC": "It is an ordered list of string",
                        "optionD": "It is an ordered list of functions",
                        "answer": "It is an ordered list of values",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "6381e25148ad635a7e304aa2",
                        "question": "Which of the following is not an error in JavaScript?",
                        "subject": "javascript",
                        "optionA": "Missing of Bracket",
                        "optionB": "Division by zero",
                        "optionC": "Syntax error",
                        "optionD": "Missing of semicolons",
                        "answer": "Division by zero",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "6381e17748ad635a7e304a9a",
                        "question": "Why event handlers is needed in JS?",
                        "subject": "javascript",
                        "optionA": "Allows JavaScript code to alter the behaviour of windows",
                        "optionB": "Adds innerHTML page to the code",
                        "optionC": "Change the server location",
                        "optionD": "Performs handling of exceptions and occurrences",
                        "answer": "Allows JavaScript code to alter the behaviour of windows",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "6381e1e848ad635a7e304a9e",
                        "question": "Which of the following is the property that is triggered in response to JS errors?",
                        "subject": "javascript",
                        "optionA": "onclick",
                        "optionB": "onerror",
                        "optionC": "onmessage",
                        "optionD": "onexception",
                        "answer": "onerror",
                        "credits": 1,
                        "__v": 0
                    },
                    {
                        "_id": "66313178dc13c88c17621adf",
                        "question": "When an operator’s value is NULL, the typeof returned by the unary operator is",
                        "subject": "javascript",
                        "optionA": "Boolean",
                        "optionB": "Undefined",
                        "optionC": "Object",
                        "optionD": "Integer",
                        "answer": "Object",
                        "credits": 2,
                        "__v": 0
                    }
                ]
            };
            const data = response.data;
            setQuestionData(data);
            setLoading(false);
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