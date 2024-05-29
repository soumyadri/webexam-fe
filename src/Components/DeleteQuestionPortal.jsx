import React, { useEffect, useState } from 'react';
import { AlertPopUp } from './AlertPopup';
import {Card, CardBody} from "@nextui-org/react";
import { getAllQuestions, postApi } from '../api.js';

export const DeleteQuestionPortal = () => {
  const [allQuestions, setQuestions] = useState([]);
  const [alertState, setAlertState] = useState({
    message: '',
    state: 'error',
    status: false,
  });

  const getQuestionDetails = async () => {
    const result = await getAllQuestions();
    if (result.status === 200) {
      setQuestions(result?.data.data);
    }
  };

  useEffect(() => {
    getQuestionDetails();
  }, []);

  const handleQuestionDelete = async (params) => {
    const result = await postApi(`question/delete/${params._id}`);
    if(result?.status == 200) {
        setAlertState({...alertState, message: "Deleted successfully", state: "success", status: true });
        setTimeout(function() {
            setAlertState({...alertState, status: false});
        }, 1000);
        getQuestionDetails();
    } else {
      setAlertState({...alertState, message: "Something went wrong", state: "error", status: true });
      setTimeout(function() {
          setAlertState({...alertState, status: false});
      }, 1000);
    }
  };

  return (
    <div className="w-4/5 h-[88vh] bg-green-400 p-10"
      style={{
        background:
          "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)",
      }}>
      {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
      <span className="text-lg font-semibold rounded-lg py-5 px-10 bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">
        Delete Question
      </span>
      <div className="bg-slate-200 rounded-lg p-5 gap-8 py-4p border-2 border-solid border-blue-400">
        <Card className="w-[100%] h-[56px] bg-white scroll-auto min-h-[400px] overflow-auto">
          <CardBody>
            {allQuestions &&
              allQuestions.map((el, key) => {
                return (
                  <div className="p-5 flex border-2 border-solid border-blue-50">
                    <span className="px-2">{key + 1}.</span>
                    <span onClick={() => handleQuestionDelete(el, key)} className="px-2 w-10 py-1 cursor-pointer"><img src="https://img.icons8.com/fluency/512/delete-forever.png" /></span>
                    <span className="px-2">{el.question}</span>
                  </div>
                );
              })}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}