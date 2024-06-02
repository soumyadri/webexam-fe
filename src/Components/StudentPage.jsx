import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { useNavigate } from "react-router-dom";

export const StudentPage = () => {
  const [subject, setSubject] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setSubject(value.currentKey);
  };

  const handleRouting = () => {
    if (subject) {
      navigate(`/examination?subject=${subject}`);
    }
  };

  return (
    <div
      className="flex"
      style={{
        backgroundImage:
          "url(https://d1uavkppl1300i.cloudfront.net/images/online-entrance-exam.png)",
        width: "98.9vw",
        height: "88.5vh",
      }}
    >
      <div className="w-[50%] text-[24px] font-semibold mt-[200px] h-[200px] text-center bg-[#ffffff89] p-5 rounded-lg">
        <span>Choose a subject of your choice</span>
        <div className="text-lg flex my-10 mx-auto justify-evenly w-[600px]">
          <Select
            label="Select A Subject"
            className="max-w-xs"
            onSelectionChange={handleChange}
          >
            {["javascript", "html", "css"].map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject.toUpperCase()}
              </SelectItem>
            ))}
          </Select>
          <Button color="primary" className="px-5 py-8" onClick={handleRouting}>
            Start Exam
          </Button>
        </div>
      </div>
    </div>
  );
};
