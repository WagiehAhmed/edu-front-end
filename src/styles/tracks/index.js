import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Stack,
    Typography,
    styled,
  } from "@mui/material";
  import { colors } from "../theme";
  
  export const TracksContainer = styled(Grid)(() => ({
    boxSizing: "border-box",
    // border: "5px solid red",
  }));
  
  export const TrackContainer = styled(Grid)(({ matches }) => ({
    padding: matches ? "5px" : "10px",
    boxSizing: "border-box",
    "&:hover": {
      cursor: "pointer",
    },
    // border: "5px solid green",
  }));
  
  export const TrackCard = styled(Card)(({ matches }) => ({
    boxSizing: "border-box",
    position: "relative",
    minWidth: "250px",
    maxWidth: matches ? "100%" : "350px",
    margin: "0px auto",
    // border: "5px solid blue",
    "&:hover": {
      "& .name": {
        color: `${colors.primary}`,
      },
    },
  }));
  
  export const TrackCardMedia = styled(CardMedia)(({ image, title }) => ({
    height: "200px",
    position: "relative",
    // borderRadius: "5px",
    image: image,
    title: title,
  
    "&:hover": {
      "& .playIcon": {
        transform: "scale(1.5,1.5)",
        color: `${colors.white}`,
      },
  
      "& .play": {
        visibility: "visible",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    },
  }));
  
  
//   export const CourseName = styled(Typography)(() => ({
//     textTransform: "capitalize",
//     padding: "8px",
//     color: `${colors.textPrimary}`,
//     // border: "5px solid blue",
//   }));
  
//   export const ViewCourse = styled(Button)(() => ({
//     textTransform: "capitalize",
//     width: "fit-content",
//     padding: "5px 10px",
//     borderRadius: "50px",
//     color: `${colors.white}`,
//     backgroundColor: `${colors.primary}`,
//     "&:hover": {
//       backgroundColor: `${colors.primary}`,
//       scale: "1.05",
//     },
//   }));
  