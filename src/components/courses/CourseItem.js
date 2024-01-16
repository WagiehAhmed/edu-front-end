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

const CourseItem = ({ matches }) => {
  const navigate= useNavigate()
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

export default CourseItem;
