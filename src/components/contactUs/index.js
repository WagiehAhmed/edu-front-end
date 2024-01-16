import React from "react";
import {
  ActionItem,
  ActionItemContainer,
  ActionItemsContainer,
  ContactContainer,
  ContactContent,
  ContactDescription,
  ContactImage,
  ContactImageContaimer,
  ContactInfo,
  ContactTitle,
  CustomTextFeild,
  FormContainer,
  HorezontalStack,
  SendButton,
  VericalStack,
} from "../../styles/contact";
import { FormControlLabel, Typography } from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import { IconContainer } from "../../styles/common";
import { colors } from "../../styles/theme";

const Contact = ({ matches }) => {
  return (
    <ContactContainer>
      <ContactInfo matches={matches}>
        <ContactImageContaimer  matches={matches}>
          <ContactImage src="./images/Contact us-rafiki.png" />
        </ContactImageContaimer>

        <ContactContent matches={matches}>
          <form>
            <FormContainer matches={matches}>
              <ContactTitle matches={matches} >
              get in touch
              </ContactTitle>
            
           <CustomTextFeild type="text" placeholder="Your Name" key="name"  name="name" />
              <CustomTextFeild
                type="email"
                placeholder="Your Email"
                key="email"
                name="email"
              />
              <CustomTextFeild
                type="text"
                placeholder="Your Number"
                key="number"
                name="number"
              />
              <CustomTextFeild
                type="text"
                multiline
                rows={5}
                placeholder="Your Message"
                key="message"
                name="message"
              />
              <SendButton type="submet">Send message</SendButton>
            </FormContainer>
          </form>
        </ContactContent>
      </ContactInfo>

      
      <ActionItemsContainer container columns={{ xs: 4,sm: 8, md:8 ,lg:12 }}>
      

        <ActionItemContainer item xs={4}>
          <ActionItem>
              <IconContainer>
                <PhoneIcon color="primary" />
              </IconContainer>
                <Typography variant="h5"  color={colors.textPrimary}>Phone Numbers</Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                  01095471204
                </Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                01144615741
                </Typography>
          </ActionItem>
        </ActionItemContainer>

        <ActionItemContainer item xs={4}>
          <ActionItem>
              <IconContainer>
                <EmailIcon color="primary" />
              </IconContainer>
                <Typography variant="h5" color={colors.textPrimary}>Email Address</Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                  wagehahmed1237@gmail.com
                </Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                wagiehahmed1237@gmail.com
                </Typography>
          </ActionItem>
        </ActionItemContainer>

        <ActionItemContainer item xs={4}>
          <ActionItem>
              <IconContainer>
                <LocationOnIcon color="primary" />
              </IconContainer>
                <Typography variant="h5" color={colors.textPrimary}>Office Address</Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                  Cairo, Egypt.
                </Typography>
          </ActionItem>
        </ActionItemContainer>


      </ActionItemsContainer>
    </ContactContainer>
  );
};

export default Contact;
