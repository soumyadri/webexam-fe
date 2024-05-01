import React, { useEffect, useState } from 'react';
import { Card, CardHeader, Image } from "@nextui-org/react";
import HomePagePhoto from '../Icons/exam-homepage.jpg';
import MeetingsImage from '../Icons/meetings.jpg';
import MathsImage from '../Icons/mathametics.jpg';
import CopyPenImage from '../Icons/copy-pen.jpg';
import BooksImage from '../Icons/books-image.jpg';
import WorkImage from '../Icons/work-plan.jpg';

const imagesList = [HomePagePhoto, MeetingsImage, MathsImage, CopyPenImage, BooksImage, WorkImage];

const text = 'take and give exams';

export const HeroSection = () => {
    console.log('Render');
    const [number, setNumber] = React.useState(1);
    const [imageSequence, setImageSequence] = useState(0);
    const highlightText = () => {
        return text.slice(0, number);
    };
    useEffect(() => {
        const textIntervalId = setInterval(() => {
            setNumber((prev) => {
                if (prev === text.length) {
                    return 0;
                } else {
                    return prev + 1;
                };
            });
        }, 100);

        const imageIntervalId = setInterval(() => {
            setImageSequence((prev) => {
                return Math.floor(Math.random() * (imagesList.length - 2));
            });
        }, 1000);

        return () => {
            clearInterval(textIntervalId);
            clearInterval(imageIntervalId);
        }
    }, []);

    return (
        <div className="w-[100%] h-[450px] bg-gradient-to-r from-blue-950 to-lime-400">
            <div className="flex justify-between">
                <div className="w-[45%] ml-10">
                    <span class="italic font-bold tracking-wider leading-10 text-4xl text-left flex uppercase bg-gradient-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent mt-[80px]">A single platform where students & teachers can both</span><span className="italic font-bold tracking-wider leading-12 text-4xl text-left flex uppercase bg-gradient-to-r from-green-200 to-lime-700 bg-clip-text text-transparent">{highlightText()}|</span>
                </div>
                <div className="flex gap-2 w-[50%]">
                    <Card className="col-span-12 sm:col-span-4 h-[400px] w-[70%] m-5">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={imagesList[imageSequence]}
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[400px] w-[50%] m-5">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={imagesList[imageSequence + 1]}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
};