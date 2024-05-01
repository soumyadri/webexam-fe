import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import FormulaIcon from '../Icons/formula-icon.jpg';

export default function Navigator() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[810px] h-[200px] mx-auto my-5"
      shadow="lg"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-between">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={400}
              shadow="md"
              src={FormulaIcon}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="text-large font-semibold text-foreground/90 mx-4">As your role is Students, all the best for your exams.</h3>
                <Button className="w-[200px] text-large my-8 mx-4" color="primary">Start Exam</Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
