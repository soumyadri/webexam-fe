import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, CheckboxGroup, Checkbox } from "@nextui-org/react";

export const LeftQuestionBar = ({ questionData }) => {
    const [selected, setSelected] = useState([]);
    const handleValueChange = (value) => {
        if (value?.length > 1) {
            setSelected([value[value.length - 1]]);
        } else {
            setSelected(value);
        }
    };
    return (
        <div className='w-[80%] bg-slate-300 m-5'>
            {questionData.map((question, index) => {
                return (
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-md">Question {index + 1}</p>
                                <p className="text-small text-default-500">{question.question}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <CheckboxGroup
                                label="Select answers"
                                value={selected}
                                onValueChange={handleValueChange}
                                color="primary"
                            >
                                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                                <Checkbox value="sydney">Sydney</Checkbox>
                                <Checkbox value="san-francisco">San Francisco</Checkbox>
                                <Checkbox value="london">London</Checkbox>
                                <Checkbox value="tokyo">Tokyo</Checkbox>
                            </CheckboxGroup>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            Attempted
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    )
}