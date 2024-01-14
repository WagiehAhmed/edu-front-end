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
import { Avatar, CardActions, CardContent } from "@mui/material";

const Course = ({ matches }) => {
  return (
    <CourseContainer item xs={4} matches={matches}>

      <CourseCard elevation={5} matches={matches}>
      
        <CourseCardHeader
          avatar={
            <Avatar src="./images/manProfile.png" sx={{width:"60px",height:"60px"}}/>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
       
        <CourseCardMedia image="./images/image1.png" title="course media" />
        
         <CourseCardContent>
          <CourseName gutterBottom variant="h6" component="div">
           Node js course
          </CourseName>
          {/* <Rating defaultValue={2} precision={1}/> */}
        </CourseCardContent>

        <CourseCardActions >
          <ViewCourse variant="filled">view course</ViewCourse>
        </CourseCardActions>
        
      </CourseCard>

    </CourseContainer>
  );
};

export default Course;
