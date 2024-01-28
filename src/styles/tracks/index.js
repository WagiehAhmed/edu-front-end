import {
  Card,
  CardMedia,
  Grid,
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
  paddingBlock:"20px",
  transition : "all .3s ease",
  "&:hover": {
    cursor: "pointer",
    transform: "translate(0%,-20px)",
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
  image: image,
  title: title,

  "& .overlay": {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  "& .track-name": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    fontWeight:"bolder",
    width:"100%",
    color: `${colors.white}`,
  },

  "&:hover": {
    "& .overlay": {
      backgroundColor: "rgba(0,0,200,0.25)",
    },
  },
}));

export const TrackName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "8px",
  color: `${colors.textPrimary}`,
  // border: "5px solid blue",
}));

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
