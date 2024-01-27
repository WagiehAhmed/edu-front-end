import React from "react";
import { Container, CustomDivider, HeaderTitle } from "../../styles/common";
import { CoursesContainer } from "../../styles/cousers";
import Course from "./Course";

const Courses = ({ matches }) => {
  return (
    <Container>
      <HeaderTitle variant={matches ? "h6" : "h4"}>our courses</HeaderTitle>
      <CustomDivider />
      <CoursesContainer
        container
        columns={{ xs: 4, sm: 8, md: 8, lg: 12, xl: 16 }}
      >
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
        <Course matches={matches} />
      </CoursesContainer>
    </Container>
  );
};

export default Courses;
