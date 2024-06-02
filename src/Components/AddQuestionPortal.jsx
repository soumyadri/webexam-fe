import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { postApi } from "../api";
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

export const AddQuestionPortal = () => {
    const [subject, setSubject] = useState("html");
    const [values, setValues] = useState(payload);
    const [alertState, setAlertState] = useState({
        message: '',
        state: 'error',
        status: false,
    });

    const handleChange = (value) => {
        setSubject(value.currentKey);
    };

    const handlePayloadChange = (key, value) => {
        setValues({ ...values, [key]: value });
    };

    const handleSubmit = async () => {
        if (subject && values && values.question && values.optionA && values.optionB && values.optionC && values.optionD && values.answer && values.credits) {
            setValues(() => { return {...values, "subject": subject }});
            const result = await postApi('question/add', { ...values, subject });
            if (result?.status === 200) {
                setAlertState({ ...alertState, message: "Question Added successfully", state: "success", status: true });
                setTimeout(function () {
                    setAlertState({ ...alertState, status: false });
                }, 2000);
                setValues(() => payload);
                setSubject("html");
            } else {
                setAlertState({ ...alertState, message: "Something went wrong", state: "error", status: true });
                setTimeout(function () {
                    setAlertState({ ...alertState, status: false });
                }, 2000);
            }
        } else {
            setAlertState({ ...alertState, message: "Something went wrong", state: "error", status: true });
            setTimeout(function () {
                setAlertState({ ...alertState, status: false });
            }, 2000);
        }
    }

    return (
        <div className="w-4/5 h-[88vh] bg-green-400 p-10" style={{ background: "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149056177.jpg?w=996&t=st=1670086998~exp=1670087598~hmac=c4411d56f48724a90164e40d3b5b0ed67270aa6666b9e31dcdfdc1d5f8c9833f)" }}>
            {alertState.status && <AlertPopUp message={alertState.message} state={alertState.state} />}
            <span className="text-lg font-semibold rounded-lg py-5 px-10 bg-green-100 border-2 border-solid border-blue-400 shadow-lg shadow-blue-200">Add Question</span>
            <div className="bg-slate-200 rounded-lg p-5 grid grid-cols-2 gap-5 py-10 border-2 border-solid border-blue-400">
                <Select
                    label="Select Subject"
                    placeholder="Select a subject"
                    onSelectionChange={handleChange}
                >
                    {['html', 'css', 'javascript'].map((subject) => (
                        <SelectItem key={subject} value={subject}>
                            {subject}
                        </SelectItem>
                    ))}
                </Select>

                <Input type="text" label="Please enter Question" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('question', value)} />

                <Input type="text" label="Please enter Option A" placeholder="Please enter Options" onValueChange={(value) => handlePayloadChange('optionA', value)} />

                <Input type="text" label="Please enter Option B" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionB', value)} />

                <Input type="text" label="Please enter Option C" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionC', value)} />

                <Input type="text" label="Please enter Option D" placeholder="Please enter Question" onValueChange={(value) => handlePayloadChange('optionD', value)} />

                <Input type="text" label="Please enter Answers" placeholder="Please enter Answers" onValueChange={(value) => handlePayloadChange('answer', value)} />

                <Input type="number" label="Please Enter Credit" placeholder="Please Enter Credit" onValueChange={(value) => handlePayloadChange('credits', value)} />
            </div>
            <div>
                <Button className="w-full py-5" color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};