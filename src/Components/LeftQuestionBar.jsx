import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, CheckboxGroup, Checkbox } from "@nextui-org/react";

export const LeftQuestionBar = ({ questionData, setQuestionData }) => {
    const handleValueChange = (value, question) => {
        if (value?.length > 1) {
            setQuestionData((prev) => {
                return prev.map((p) => p._id === question._id ? { ...p, selected: [value[value.length - 1]]} : {...p} )
            });
        } else {
            setQuestionData((prev) => {
                return prev.map((p) => p._id === question._id ? { ...p, selected: value} : {...p} )
            });
        }
    };

    return (
        <div className='w-[80%]'>
            {questionData.map((question, index) => {
                return (
                    <Card className="max-w-[800px] m-5">
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-md text-default-400 text-left">Question {index + 1}</p>
                                <p className="text-lg text-left">{question.question}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <CheckboxGroup
                                label="Select answers"
                                value={question.selected}
                                onValueChange={(value) => handleValueChange(value, question)}
                                color="primary"
                            >
                                <Checkbox value={question.optionA}>{question.optionA}</Checkbox>
                                <Checkbox value={question.optionB}>{question.optionB}</Checkbox>
                                <Checkbox value={question.optionC}>{question.optionC}</Checkbox>
                                <Checkbox value={question.optionD}>{question.optionD}</Checkbox>
                            </CheckboxGroup>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            {question.selected?.length ? 'Attempted' : 'Not Attempted'}
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )
}