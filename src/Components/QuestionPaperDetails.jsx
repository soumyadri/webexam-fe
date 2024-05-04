import React from 'react';
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import ThingsDifferentImage from '../Icons/things_diff.jpg';
import { useTimer } from '../Hooks/useTimer';

export const QuestionPaperDetails = ({subject, questionData}) => {
    const { minutes, seconds, trigger } = useTimer();
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-[40%] mx-auto h-[120px] z-50 sticky top-0"
            shadow="lg"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4 ml-5">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height="70px"
                            shadow="lg"
                            src={ThingsDifferentImage}
                            width="70px"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90 text-large">Subject : {subject}</h3>
                                <p className="text-small text-foreground/80">Total Questions : {questionData.length}</p>
                                <h1 className="text-large font-medium mt-2">Time Remaining : {minutes}:{seconds}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}