import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react";
import { getAllQuestions, postApi } from "../api";
import { timeout } from "../constant";
import { AlertPopUp } from "./AlertPopup";

const payload = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
    subject: "",
    credits: "",
};

export const EditQuestionPortal = () => {
    const [allQuestions, setQuestions] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [subject, setSubject] = useState("html");
    const [values, setValues] = useState(payload);
    const [alertState, setAlertState] = useState({
        message: '',
        state: 'error',
        status: false,
    });

    const handleChange = (event) => {
        setSubject(event.target.value);
    };

    const handlePayloadChange = (key, value) => {
        setValues({ ...values, [key]: value });
    };

    const handleSubmit = async () => {
        if (
            subject &&
            values &&
            values.question &&
            values.optionA &&
            values.optionB &&
            values.optionC &&
            values.optionD &&
            values.answer &&
            values.credits
        ) {
            setValues({ ...values, subject: subject, _id: null });
            const result = await postApi(`question/edit/${values._id}`, values);
            if (result?.status == 200) {
                setAlertState({ ...alertState, message: "Edited successfully", state: "success", status: true });
                setTimeout(function () {
                    setAlertState({ ...alertState, status: false });
                }, timeout);
                setEditModalOpen(false);
                getQuestionDetails();
            } else {
                setAlertState({ ...alertState, message: "Something went wrong", state: "error", status: true });
                setTimeout(function () {
                    setAlertState({ ...alertState, status: false });
                }, timeout);
            }
        } else {
            setAlertState({ ...alertState, message: "Something went wrong", state: "error", status: true });
            setTimeout(function () {
                setAlertState({ ...alertState, status: false });
            }, timeout);
        }
    };

    const getQuestionDetails = async () => {
        const result = await getAllQuestions();
        if (result.status === 200) {
            setQuestions(result?.data.data);
        }
    };

    useEffect(() => {
        getQuestionDetails();
    }, []);

    const handleQuestionEdit = async (params) => {
        setEditModalOpen(true);
        setValues({ ...values, ...params });
        setSubject(params.subject);
    };

    return (
        <div
            className="w-4/5 h-[88vh] bg-green-400 p-10"
            style={{
                background:
                    "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)",
            }}
        >
            {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
            <span className="text-lg font-semibold rounded-lg py-5 px-10 bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">
                Edit Question
            </span>
            <div className="bg-slate-200 rounded-lg p-5  gap-7 py-10 border-2 border-solid border-blue-400">
                {!editModalOpen ? (
                    <Card className="w-[100%] h-[56px] bg-white scroll-auto min-h-[400px] overflow-auto">
                        <CardBody>
                            {allQuestions &&
                                allQuestions.map((el, key) => {
                                    return (
                                        <div className="p-2p flex border-2 border-solid border-blue-50">
                                            <span className="px-2">{key + 1}.</span>
                                            <span
                                                onClick={() => handleQuestionEdit(el, key)}
                                                className="px-2 w-8 py-1 cursor-pointer"
                                            >
                                                <img src="https://img.icons8.com/emoji/512/pen-emoji.png" />
                                            </span>
                                            <span className="px-2">{el.question}</span>
                                        </div>
                                    );
                                })}

                            {allQuestions.length === 0 && (
                                <div className="text-slate-400 text-left">No Questions</div>
                            )}
                        </CardBody>
                    </Card>
                ) : (
                    <div>
                        <div className="grid grid-cols-2 gap-2p">
                            <Select
                                label="Select Subject"
                                placeholder="Select a subject"
                                onSelectionChange={handleChange}
                                value={values.subject}
                            >
                                {['html', 'css', 'javascript'].map((subject) => (
                                    <SelectItem key={subject} value={subject}>
                                        {subject}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Input value={values.question} type="text" label="Please enter Question" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('question', value)} />

                            <Input value={values.optionA} type="text" label="Please enter Option A" placeholder="Please enter Options" onValueChange={(value) => handlePayloadChange('optionA', value)} />

                            <Input value={values.optionB} type="text" label="Please enter Option B" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionB', value)} />

                            <Input value={values.optionC} type="text" label="Please enter Option C" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionC', value)} />

                            <Input value={values.optionD} type="text" label="Please enter Option D" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionD', value)} />

                            <Input value={values.answer} type="text" label="Please enter Answers" placeholder="Please enter Answers" onValueChange={(value) => handlePayloadChange('answer', value)} />

                            <Input value={values.credits} type="number" label="Please Enter Credit" placeholder="Please Enter Credit" onValueChange={(value) => handlePayloadChange('credits', value)} />
                        </div>
                        <div>
                            <Button
                                onClick={handleSubmit}
                                className="w-full"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};