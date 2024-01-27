import React from "react";
import {
  CourseCard,
  CourseCardActions,
  CourseCardContent,
  CourseCardHeader,
  CourseCardMedia,
  CourseContainer,
  CourseName,
  ViewCourse,
} from "../../styles/cousers";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Course = ({ matches }) => {
  const navigate= useNavigate()
  return (
    <CourseContainer item xs={4} matches={matches}>

      <CourseCard elevation={5} matches={matches}>
        <CourseCardMedia image="./images/image1.png" title="course media" />
        
         {/* <CourseCardContent> */}
          <CourseName variant="h6" component="div">
           Node js course
          </CourseName>
          {/* <Rating defaultValue={2} precision={1}/> */}
        {/* </CourseCardContent> */}

        <CourseCardActions >
          <ViewCourse onClick={()=>{navigate("/courses/1",{replace:false})}}>view course</ViewCourse>
        </CourseCardActions>
        
      </CourseCard>

    </CourseContainer>
  );
};

export default Course;
