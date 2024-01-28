import React from "react";
import {
  CourseCard,
  CourseCardActions,
  CourseCardContent,
  CourseCardHeader,
  CourseCardMedia,
  CourseContainer,
  CourseDetailsStack,
  CourseName,
  CourseState,
  TrackName,
  TrackPreview,
  ViewCourse,
} from "../../styles/cousers";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CustomLink, IconContainer } from "../../styles/common";

import LockOpenIcon from "@mui/icons-material/LockOpen";

const Course = ({ matches,course }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // go to course
  const goToCourse = () => {
    navigate(`${course.id}`, { replace: false });
  };
  return (
    <CourseContainer item xs={4} matches={matches}>
      <CustomLink onClick={goToCourse}>
        <CourseCard elevation={5} matches={matches}>
          <CourseCardMedia image={course.image} title="course media">
            <Box className="overlay" />
            <TrackName className="track-name">
              {course.id}
              {/* {searchParams.get("name")} */}
            </TrackName>
            <TrackPreview className="track-preview">
              preview course
            </TrackPreview>
          </CourseCardMedia>
          <CourseDetailsStack>
            <CourseName variant="h6" className="course-name">
              {course.name}
            </CourseName>
            <IconContainer className="lock-open">
              <LockOpenIcon color="primary" />
            </IconContainer>
          </CourseDetailsStack>

          <CourseDetailsStack>
            <CourseDetailsStack className="enrolled-students">
              <IconContainer className="enrolled-students">
                <PersonIcon />
              </IconContainer>
              {course.enrolledStudents}
            </CourseDetailsStack>

            <CourseState>FREE</CourseState>
          </CourseDetailsStack>
        </CourseCard>
      </CustomLink>
    </CourseContainer>
  );
};

export default Course;
