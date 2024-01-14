import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutImage,
  AboutImageContaimer,
  AboutInfo,
  AboutTitle,
  ActionItem,
  ActionsContainer,
  HorezontalStack,
  ReviewsContainer,
  VericalStack,
} from "../../styles/about";
import {
  CustomButton,
  CustomDivider,
  HeaderTitle,
  IconContainer,
} from "../../styles/common";
import { Box, Typography } from "@mui/material";
import CastIcon from "@mui/icons-material/Cast";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import { colors } from "../../styles/theme";
import Slider from "react-slick";
import ReviewItem from "./ReviewItem";

const About = ({ matches }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AboutContainer>
      <AboutInfo matches={matches}>
        <AboutImageContaimer>
          {/* <AboutImage src="./images/a3.jpg" /> */}
          <AboutImage src="./images/Online learning-rafiki.png" />




        </AboutImageContaimer>
        <AboutContent matches={matches}>
          <AboutTitle matches={matches}>why choose us?</AboutTitle>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            corrupti! Aliquam rerum tempore molestiae esse magnam. Laborum quis
            fugiat rerum qui distinctio ratione. Iste explicabo eligendi odit
            quis dolorum voluptates.
          </AboutDescription>
          <CustomButton>our courses</CustomButton>
        </AboutContent>
      </AboutInfo>

      <ActionsContainer in_center="true">
        <ActionItem>
          <HorezontalStack>
            <IconContainer>
              <SchoolIcon color="primary" />
            </IconContainer>
            <VericalStack>
              <Typography variant="h5">+10K</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                online courses
              </Typography>
            </VericalStack>
          </HorezontalStack>
        </ActionItem>

        <ActionItem>
          <HorezontalStack>
            <IconContainer>
              <CastForEducationIcon color="primary" />
            </IconContainer>
            <VericalStack>
              <Typography variant="h5">+40K</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                students
              </Typography>
            </VericalStack>
          </HorezontalStack>
        </ActionItem>

        <ActionItem>
          <HorezontalStack>
            <IconContainer>
              <CastIcon color="primary" />
            </IconContainer>
            <VericalStack>
              <Typography variant="h5">+12K</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                expert tutors
              </Typography>
            </VericalStack>
          </HorezontalStack>
        </ActionItem>

        <ActionItem>
          <HorezontalStack>
            <IconContainer>
              <BusinessCenterIcon color="primary" />
            </IconContainer>
            <VericalStack>
              <Typography variant="h5">100%</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                job placement
              </Typography>
            </VericalStack>
          </HorezontalStack>
        </ActionItem>
      </ActionsContainer>



      <HeaderTitle variant={matches ? "h6" : "h4"}>
        student's reviews
      </HeaderTitle>
      <CustomDivider />
      <ReviewsContainer>
        <Slider {...settings}>
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
          <ReviewItem matches={matches} />
        </Slider>
      </ReviewsContainer>
    </AboutContainer>
  );
};

export default About;
