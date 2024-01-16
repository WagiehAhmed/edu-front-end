import React from "react";
import { CustomButton, CustomDivider, HeaderTitle } from "../../styles/common";
import {
  BecomeToturText,
  CoursesContainer,
  QuickLinkCard,
  QuickLinkCardContent,
  QuickLinkCardHeader,
  QuickLinkContainer,
  QuickLinksContainer,
  TopicChip,
} from "../../styles/home";
import CourseItem from "../courses/CourseItem";

import TerminalIcon from '@mui/icons-material/Terminal';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScienceIcon from '@mui/icons-material/Science';
import BugReportIcon from '@mui/icons-material/BugReport';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DesignServicesIcon from '@mui/icons-material/DesignServices';










const Home = ({ matches }) => {
  return (
    <>
      <HeaderTitle variant={matches ? "h6" : "h4"}>quick linkes</HeaderTitle>
      <CustomDivider />
      <QuickLinksContainer
        container
        columns={{ xs: 8, sm: 8, md: 8, lg: 12, xl: 16 }}
        matches={matches}>
        <QuickLinkContainer item xs={4} matches={matches}>
          <QuickLinkCard matches={matches} elevation={5}>
            <QuickLinkCardHeader title="Likes & Comments" />
            <QuickLinkCardContent>
              <TopicChip label="Comments" variant="outlined" color="primary" />
              <TopicChip label="Saved Items" variant="outlined" color="primary" />
              <TopicChip label="Likes" variant="outlined" color="primary" />
            </QuickLinkCardContent>
          </QuickLinkCard>
        </QuickLinkContainer>
        
        <QuickLinkContainer item xs={4} matches={matches}>
          <QuickLinkCard matches={matches} elevation={5}>
            <QuickLinkCardHeader title="Top Categories" />
            <QuickLinkCardContent>
              <TopicChip label="Design" variant="outlined" color="primary" icon={<DesignServicesIcon/>}/>
              <TopicChip label="Music" variant="outlined" color="primary" icon={<MusicNoteIcon/>}/>
              <TopicChip label="Business" variant="outlined" color="primary" icon={<BusinessIcon/>}/>
              <TopicChip label="Science" variant="outlined" color="primary" icon={<ScienceIcon/>}/>
              <TopicChip label="Accountment" variant="outlined" color="primary" icon={<BarChartIcon/>}/>
              <TopicChip label="Programming" variant="outlined" color="primary" icon={<TerminalIcon/>}/>
              <TopicChip label="Markting" variant="outlined" color="primary" icon={<TrendingUpIcon/>}/>
              <TopicChip label="Software Testing" variant="outlined" color="primary" icon={<BugReportIcon/>}/>
            </QuickLinkCardContent>
          </QuickLinkCard>
        </QuickLinkContainer>
        
        <QuickLinkContainer item xs={4} matches={matches}>
          <QuickLinkCard matches={matches} elevation={5}>
            <QuickLinkCardHeader title="Popular Topics" />
            <QuickLinkCardContent>
              <TopicChip label="php" variant="outlined" color="primary" />
              <TopicChip label="html" variant="outlined" color="primary" />
              <TopicChip label="css" variant="outlined" color="primary" />
              <TopicChip label="js" variant="outlined" color="primary" />
              <TopicChip label="java" variant="outlined" color="primary" />
              <TopicChip label="react js" variant="outlined" color="primary" />
              <TopicChip label="node js" variant="outlined" color="primary" />
              <TopicChip label="reactNative" variant="outlined" color="primary"/>
              <TopicChip label="Design" variant="outlined" color="primary"/>
              <TopicChip label="Testing" variant="outlined" color="primary"/>
            </QuickLinkCardContent>
          </QuickLinkCard>
        </QuickLinkContainer>
        
        <QuickLinkContainer item xs={4} matches={matches}>
          <QuickLinkCard matches={matches} elevation={5}>
            <QuickLinkCardHeader title="Become a Tutor" />
            <QuickLinkCardContent>
              {/* <TopicChip label="php" variant="outlined" color="primary" />
              <TopicChip label="html" variant="outlined" color="primary" />
              <TopicChip label="css" variant="outlined" color="primary" />
              <TopicChip label="js" variant="outlined" color="primary" />
              <TopicChip label="java" variant="outlined" color="primary" />
              <TopicChip label="react js" variant="outlined" color="primary" />
              <TopicChip label="node js" variant="outlined" color="primary" />
              <TopicChip label="reactNative" variant="outlined" color="primary"/> */}
              <BecomeToturText variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error impedit explicabo harum tempore, repellat minus. Ducimus voluptatem cumque eos, quae illum fuga rerum, rem autem, nulla at eum odio?</BecomeToturText>
            <CustomButton>get start</CustomButton>
            
            
            </QuickLinkCardContent>
          </QuickLinkCard>
        </QuickLinkContainer>
        
      </QuickLinksContainer>

      <HeaderTitle variant={matches ? "h6" : "h4"}>top courses</HeaderTitle>
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
      </CoursesContainer>
    </>
  );
};

export default Home;
