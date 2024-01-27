
import React from "react";
import { ReviewItemContainer, ReviewItemHeader, ReviewItemHeaderData, ReviewItemHeaderImage, ReviewItemHeaderName, ReviewItemText } from "../../styles/about";
import { Rating } from "@mui/material";


const ReviewItem = ({matches }) => {
  return (
    <ReviewItemContainer matches={matches} elevation={5}>
        <ReviewItemHeader>
          <ReviewItemHeaderImage src="./images/manProfile.png" size="small" />
          <ReviewItemHeaderData>
            <ReviewItemHeaderName>john wael</ReviewItemHeaderName> 
            <Rating defaultValue={2} precision={1} />
          </ReviewItemHeaderData>
        </ReviewItemHeader>
        <ReviewItemText variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eum ea
          laborum facilis! Laborum, animi consectetur. Corporis minus, iusto
          voluptates voluptatum libero, tempora sapiente, earum laboriosam
          soluta dolore fugit eligendi.
        </ReviewItemText>
      </ReviewItemContainer>
  )
}

export default ReviewItem;
