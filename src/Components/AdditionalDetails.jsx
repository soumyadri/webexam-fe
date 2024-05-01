import React from 'react';
import { Card, CardHeader, Image } from "@nextui-org/react";
const cardData = [
    {
        text: '10K+',
        description: 'Online Exams',
    },
    {
        text: '200+',
        description: 'Expert Tutors',
    },
    {
        text: '50k+',
        description: 'Online students',
    },
    {
        text: '5 ⭐',
        description: 'Certified Website'
    }
];

export const AdditionalDetails = () => {
    return (
        <div>
            <div className='flex justify-between w-[80%] mx-auto my-10'>
                {cardData.map((data) => (
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col text-left">
                                <p className="text-md">{data.text}</p>
                                <p className="text-small text-default-500">{data.description}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}