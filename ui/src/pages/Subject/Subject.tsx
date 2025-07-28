import React from "react";
import "./Subject.scss";

interface SubjectProps {
  name: string;
  description: string;
  teacher: string;
  credits: number;
}

const Subject: React.FC<SubjectProps> = ({ name, description, teacher, credits }) => {
  return (
    <div className="subject-container">
      <h2 className="subject-title">{name}</h2>
      <p className="subject-description">{description}</p>
      <div className="subject-details">
        <span className="subject-teacher">Teacher: {teacher}</span>
        <span className="subject-credits">Credits: {credits}</span>
      </div>
    </div>
  );
};

export default Subject