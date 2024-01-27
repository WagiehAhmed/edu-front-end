import React, { useEffect } from "react";
import { Container, CustomTextFeild, SearchStack } from "../../styles/common";
import { CoursesContainer, CoursesCount } from "../../styles/cousers";
import Course from "../courses/Course";
import { useSearchParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from "@mui/material";

import {blockChainCourses} from "../../data/data"
const TrackCourses = ({ matches, setMainTitle }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const trackName = searchParams.get("name");
  useEffect(() => {
    setMainTitle(trackName);
  }, []);
  return (
    <Container>
      <SearchStack>
        <CoursesCount>
          {blockChainCourses.length} course
        </CoursesCount>
        <CustomTextFeild
        className="search-feild"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color={"primary" } />
              </InputAdornment>
            ),
          }}
          key="search"
          name="search"
          placeholder="Search"
          variant="outlined"
          type="text"
          // value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />
      </SearchStack>
      <CoursesContainer container columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
       {
        blockChainCourses.map((course) => (<Course key={course.id} course={course}/> ))
       }
      </CoursesContainer>
    </Container>
  );
};

export default TrackCourses;
