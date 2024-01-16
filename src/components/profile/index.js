import React from "react";
import {
  ActionItem,
  ActionItemContainer,
  ActionItemsContainer,
  Container,
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

const Profile = ({ matches }) => {
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <HeaderTitle variant={matches ? "h6" : "h4"}>your profile</HeaderTitle>
      <CustomDivider />
      <Container>
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

        <ActionItemsContainer container columns={{ xs: 4,sm: 8, md: 12 }}>
          <ActionItemContainer item xs={4}>
            <ActionItem>
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
            <ActionItem >
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
            <ActionItem>
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
        </ActionItemsContainer>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;
