import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from 'react';

export const ResultPage = () => {
    const result = JSON.parse(sessionStorage.getItem("result"));
    return (
        <div className="flex w-full">
            <div className="bg-blue-50" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/college-entrance-exam-concept-illustration_114360-10532.jpg?w=996&t=st=1669716428~exp=1669717028~hmac=9daa07319f69c1908897e48d2e5584b76a5687db231bd5fda920886e10882b5d)", width: "63%", height: "88.5vh", backgroundRepeat: "no-repeat" }}></div>
            <div className="bg-green-100 w-[37%] p-2p border-l-4 border-green-200 border-solid">
                <Card className="max-w-[90%] mx-auto sticky top-20">
                    <CardHeader className="flex gap-3">
                        <span className="font-bold text-xl border-solid pb-1p">Soumyadri's Result Board</span>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-col text-lg font-serif my-4p">
                            <span className="my-1p"> Questions Attempt : <span className="font-semibold">{(result?.right + result?.wrong) || 0}</span></span>
                            <span className="my-1p"> Correct Attempt : <span className="font-semibold">{result?.right || 0}</span></span>
                            <span className="my-1p"> Wrong Attempt : <span className="font-semibold">{result?.wrong || 0}</span></span>
                            <span className="my-1p"> Total Marks : <span className="font-semibold">{result?.marks || 0}</span></span>
                            <span className="my-1p"> Grade : <span className="font-semibold">{result.status ? 'Pass' : 'Wrong'}</span></span>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
};