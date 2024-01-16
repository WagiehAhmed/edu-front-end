import React from "react";
import {
  CustomButton,
  CustomDivider,
  HeaderTitle,
  IconContainer,
} from "../../styles/common";
import {
  CourseCardHeader,
  CourseContent,
  CourseDescription,
  CourseImage,
  CourseImageContaimer,
  CourseInfo,
  CourseTitle,
  CoursesContainer,
} from "../../styles/cousers";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { colors } from "../../styles/theme";
import CourseLesson from "./CourseLesson";
const CoursePage = ({ matches }) => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderTitle variant={matches ? "h6" : "h4"} sx={{display:"inline-block"}}>course details</HeaderTitle>
        {/* <IconContainer >
          <BookmarkIcon color="primary"/>
        </IconContainer> */}
      <CustomDivider />

      <CourseInfo matches={matches}>
        <CourseImageContaimer matches={matches}> 
          <CourseImage src="../images/image1.png" />
        </CourseImageContaimer>
        <CourseContent matches={matches}>
          <CourseCardHeader
            avatar={
              <Avatar
                src="../images/manProfile.png"
                sx={{ width: "60px", height: "60px" }}
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CourseTitle matches={matches}>node JS complete course</CourseTitle>
          <CourseDescription variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            corrupti! Aliquam rerum tempore molestiae esse magnam. Laborum quis
            fugiat rerum qui distinctio ratione. Iste explicabo eligendi odit
            quis dolorum voluptates.
          </CourseDescription>
          <CustomButton
            onClick={() => {
              navigate("/profile/2", { replace: false });
            }}
          >
            view profile
          </CustomButton>
        </CourseContent>
      </CourseInfo>

      <HeaderTitle variant={matches ? "h6" : "h4"} >course lessons</HeaderTitle>
      <CustomDivider />
      <CoursesContainer   container
        columns={{ xs: 4, sm: 8, md: 8, lg: 12, xl: 16 }}
        matches={matches} >
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
        <CourseLesson matches={matches}/>
      </CoursesContainer>
    </>
  );
};

export default CoursePage;
