import React from "react";
import {
  ActionItem,
  ActionItemContainer,
  ActionItemsContainer,
  HorezontalStack,
  ProfileContainer,
  VericalStack,
} from "../../styles/profile";
import {
  UserData,
  UserImage,
  UserName,
  CustomButton,
  IconContainer,
  CustomDivider,
  HeaderTitle,
} from "../../styles/common";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from './../../styles/common/index';

const Profile = ({ matches }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderTitle variant={matches ? "h6" : "h4"}>profile Details</HeaderTitle>
      <CustomDivider />
      <ProfileContainer>
        <UserData>
          <UserImage src="../images/manProfile.png" />
          <UserName variant="body1">wagieh ahmed</UserName>
          <CustomButton
            onClick={() => {
              navigate("/updateProfile", { replace: true });
            }}
          >
            update profile
          </CustomButton>
        </UserData>

        <ActionItemsContainer container columns={{ xs: 8,sm: 8, md: 12, lg:16 }}>
          <ActionItemContainer item xs={4}>
            <ActionItem matches={matches}>
              <HorezontalStack>
                <IconContainer>
                  <BookmarkIcon color="primary" />
                </IconContainer>
                <VericalStack>
                  <Typography variant="h5">4</Typography>
                  <Typography variant="body2">saved playlists</Typography>
                </VericalStack>
              </HorezontalStack>
              <CustomButton>view playlists</CustomButton>
            </ActionItem>
          </ActionItemContainer>

          <ActionItemContainer item xs={4}>
            <ActionItem matches={matches}>
              <HorezontalStack>
                <IconContainer>
                  <ThumbUpIcon color="primary" />
                </IconContainer>
                <VericalStack>
                  <Typography variant="h5">33</Typography>
                  <Typography variant="body2">videos likes</Typography>
                </VericalStack>
              </HorezontalStack>
              <CustomButton>view playlists</CustomButton>
            </ActionItem>
          </ActionItemContainer>

          <ActionItemContainer item xs={4}>
            <ActionItem matches={matches}>
              <HorezontalStack>
                <IconContainer>
                  <ChatIcon color="primary" />
                </IconContainer>
                <VericalStack>
                  <Typography variant="h5">12</Typography>
                  <Typography variant="body2">videos comments</Typography>
                </VericalStack>
              </HorezontalStack>
              <CustomButton>view playlists</CustomButton>
            </ActionItem>
          </ActionItemContainer>

          <ActionItemContainer item xs={4}>
            <ActionItem matches={matches}>
              <HorezontalStack>
                <IconContainer>
                  <ChatIcon color="primary" />
                </IconContainer>
                <VericalStack>
                  <Typography variant="h5">0</Typography>
                  <Typography variant="body2">Courses</Typography>
                </VericalStack>
              </HorezontalStack>
              <CustomButton>view courses</CustomButton>
            </ActionItem>
          </ActionItemContainer>
        </ActionItemsContainer>
      </ProfileContainer>
      <HeaderTitle variant={matches ? "h6" : "h4"}>Your Courses</HeaderTitle>
      <CustomDivider />
    </Container>
  );
};

export default Profile;
