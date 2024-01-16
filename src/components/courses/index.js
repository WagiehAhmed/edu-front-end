import React from "react";
import { Container, CustomDivider, HeaderTitle } from "../../styles/common";
import { CoursesContainer } from "../../styles/cousers";
import CourseItem from "./CourseItem";

const Courses = ({ matches }) => {
  return (
    <>
      <HeaderTitle variant={matches ? "h6" : "h4"}>our courses</HeaderTitle>
      <CustomDivider />
      <CoursesContainer
        container
        columns={{ xs: 4, sm: 8, md: 8, lg: 12, xl: 16 }}
        matches={matches}
      >
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
        <CourseItem matches={matches} />
      </CoursesContainer>
    </>
  );
};

export default Courses;
