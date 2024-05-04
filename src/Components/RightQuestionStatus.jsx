import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export const RightQuestionStatus = ({ questionData }) => {
    const answerdQuestion = questionData.filter((question) => question.selected?.length > 0).length;
    return (
        <Card className="w-[420px] max-h-[500px] m-5 sticky top-20">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-lg text-default-500">
                <p>
                    Question Analysis
                </p>
                <div className='flex flex-col text-default-400'>
                    <span>Answered : {answerdQuestion}</span>
                    <span>Unanswerd : {questionData.length - answerdQuestion}</span>
                </div>
                <div className="pt-2 flex flex-wrap">
                    {questionData.map((question, index) => (
                        <Card className={`m-2 p-1 ${question.selected?.length ? 'bg-green-200' : 'unset'}`}>
                            <CardHeader className="justify-between"><div>{index + 1}</div></CardHeader>
                        </Card>
                    ))}
                </div>
            </CardBody>
            <CardFooter className="gap-3">
                <Button className='w-[100%]' color='primary'>Submit Test</Button>
            </CardFooter>
        </Card>
    );
}