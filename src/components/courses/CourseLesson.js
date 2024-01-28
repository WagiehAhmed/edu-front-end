import React from "react";
import {
  CourseCard,
  CourseCardContent,
  CourseCardMedia,
  CourseContainer,
  CourseName,
  StartIconContainer,
} from "../../styles/cousers";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from "react-router-dom";
const CourseLesson = ({ matches }) => {
  const navigate = useNavigate();
  return (
    <CourseContainer item xs={4} matches={matches} onClick={()=>{navigate("2",{replace:false})}}>
      <CourseCard elevation={5} matches={matches}>
        <CourseCardMedia image="../../images/image1.png" title="course media">
          <StartIconContainer className="play">
            <PlayArrowIcon fontSize="large" className="playIcon"/>
          </StartIconContainer>
        </CourseCardMedia>
        {/* <CourseCardContent> */}
        <CourseName variant="h6" className="name" >
          Node js course #1
        </CourseName>
        {/* <Rating defaultValue={2} precision={1}/> */}
        {/* </CourseCardContent> */}
      </CourseCard>
    </CourseContainer>
  );
};

export default CourseLesson;
