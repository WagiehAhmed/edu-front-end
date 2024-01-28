import React, { useState } from "react";
import {
  Container,
  CustomButton,
  CustomDivider,
  CustomFormControl,
  CustomMultilineTextFeild,
  HeaderTitle,
  UserImage,
  UserName,
} from "../../styles/common";
import {
  CommentBody,
  CommentContainer,
  CourseName,
  CustomForm,
  HorizontalStack,
  IconContainer,
  LessonDescription,
  LessonSource,
  LessonVideo,
  VerticalStack,
} from "../../styles/cousers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DateRangeIcon from "@mui/icons-material/DateRange";

import { Typography } from "@mui/material";
import { colors } from "../../styles/theme";

const CourseLessonPage = ({ matches }) => {
  const [like, setLike] = useState(false);
  return (
    <Container>
      <LessonVideo controls >
        <LessonSource src="../../../videos/lesson.mp4" type="video/mp4" />
      </LessonVideo>
      <CourseName variant="h6">Node js complete course lesson 1.</CourseName>
      <HorizontalStack>
        <HorizontalStack>
          <IconContainer>
            <DateRangeIcon color="primary" />
          </IconContainer>
          <Typography color={colors.textSecondary}>22-10-2024</Typography>
        </HorizontalStack>
        <HorizontalStack>
          <IconContainer
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </IconContainer>
          <Typography color={colors.textSecondary}>Likes</Typography>
        </HorizontalStack>
      </HorizontalStack>
      <CustomDivider />
      <HorizontalStack>
        <UserImage src="../../../images/manProfile.png" />
        <UserName>johan wael</UserName>
      </HorizontalStack>
      <LessonDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        laborum odit alias fugiat soluta omnis eaque officiis aperiam nostrum
        atque. Omnis reiciendis rerum cumque sit quis atque voluptatibus minus
        adipisci.
      </LessonDescription>

      <HeaderTitle
        variant={matches ? "h6" : "h4"}
        sx={{ display: "inline-block" }}
      >
        add a comment
      </HeaderTitle>
      <CustomDivider />
      <CustomForm>
        <CustomFormControl>
          <CustomMultilineTextFeild
            name="comment"
            key="comment"
            type="text"
            multiline
            rows={5}
            placeholder="write your comments"
          ></CustomMultilineTextFeild>
          <CustomButton type="submit">add comment</CustomButton>
        </CustomFormControl>
      </CustomForm>
      <HeaderTitle
        variant={matches ? "h6" : "h4"}
        sx={{ display: "inline-block" }}
      >
        student's comments
      </HeaderTitle>
      <CustomDivider />
      <CommentContainer>
        <HorizontalStack>
          <UserImage src="../../../images/manProfile.png" />
          <VerticalStack>
            <UserName>johan wael</UserName>
            <Typography color={colors.textSecondary}>22-10-2024</Typography>
          </VerticalStack>
        </HorizontalStack>
        <CommentBody variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, non, sapiente laudantium doloremque ab a culpa voluptatibus quibusdam nihil consequuntur mollitia dignissimos! Fuga minus porro illo aliquam ipsa sint debitis.
        </CommentBody>
      </CommentContainer>
      <CommentContainer>
        <HorizontalStack>
          <UserImage src="../../../images/manProfile.png" />
          <VerticalStack>
            <UserName>johan wael</UserName>
            <Typography color={colors.textSecondary}>22-10-2024</Typography>
          </VerticalStack>
        </HorizontalStack>
        <CommentBody variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, non, 
        </CommentBody>
      </CommentContainer>
      <CommentContainer>
        <HorizontalStack>
          <UserImage src="../../../images/manProfile.png" />
          <VerticalStack>
            <UserName>johan wael</UserName>
            <Typography color={colors.textSecondary}>22-10-2024</Typography>
          </VerticalStack>
        </HorizontalStack>
        <CommentBody variant="body1">
           Placeat, non, sapiente laudantium doloremque ab a culpa voluptatibus quibusdam nihil consequuntur mollitia dignissimos!.
        </CommentBody>
      </CommentContainer>
    </Container>
  );
};

export default CourseLessonPage;
