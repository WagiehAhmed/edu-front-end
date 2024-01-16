import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

export const CoursesContainer = styled(Grid)(({ matches }) => ({
  boxSizing: "border-box",
  // backgroundColor: "red",
  // border: "5px solid red",
}));

export const CourseContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "15px" : "30px",
  boxSizing: "border-box",
  "&:hover": {
    cursor: "pointer",
  },
  // backgroundColor: "green",
  // border: "5px solid green",
}));

export const CourseCard = styled(Card)(({ matches }) => ({
  boxSizing: "border-box",
  position: "relative",
  minWidth: "200px",
  maxWidth: matches ? "100%" : "350px",
  margin: "5px auto",
  // padding: "10px 10px 0px 10px",
  // border: "5px solid blue",

  "&:hover": {
    "& .name": {
      color: `${colors.primary}`,
    },
  },
}));

export const CourseCardHeader = styled(CardHeader)(({ title, subheader }) => ({
  title: title,
  subheader: subheader,
}));

export const CourseCardMedia = styled(CardMedia)(({ image, title }) => ({
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

export const CourseCardContent = styled(CardContent)(() => ({
  // border: "5px solid yellow",
}));

export const CourseName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "8px",
  color: `${colors.textPrimary}`,
  // border: "5px solid blue",
}));

export const CourseCardActions = styled(CardActions)(() => ({
  padding: "0px 16px 16px 16px",
  // border: "5px solid blue",
}));

export const ViewCourse = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  padding: "5px 10px",
  borderRadius: "50px",
  color: `${colors.white}`,
  backgroundColor: `${colors.primary}`,
  "&:hover": {
    backgroundColor: `${colors.primary}`,
    scale: "1.05",
  },
}));

export const StartIconContainer = styled(IconButton)(() => ({
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  borderRadius: "0px",
  visibility: "hidden",
  color: `${colors.textPrimary}`,
}));

export const CourseInfo = styled(Stack)(({ matches }) => ({
  flexDirection: matches ? "column" : "row",
  // justifyContent: "center",
  // alignItems: matches ? "center" : "",
  backgroundColor: `${colors.white}`,
  borderRadius: "10px",
  padding: "20px",
  // margin: "10px auto",
  // minHeight:"500px",
  // border: "2px solid green",
}));

export const CourseContent = styled(Stack)(({matches}) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  flexDirection: "column",
  justifyContent: "center",
  padding: "30px",
  // border: "2px solid yellow",
}));

export const CourseTitle = styled(Typography)(({ matches }) => ({
  color: `${colors.textPrimary}`,
  fontSize: matches ? "1em" : "2em",
  fontWeight: "bold",
  textTransform: "capitalize",
}));

export const CourseDescription = styled(Typography)(() => ({
  color: `${colors.textSecondary}`,
  textTransform: "capitalize",
  marginBottom: "10px",
  lineHeight: "35px",
  "&:hover": {
    color: `${colors.textPrimary}`,
  },
}));

export const CourseImageContaimer = styled(Box)(({matches}) => ({
  flexGrow: 1,
  maxWidth: matches?"100%":"50%",
  // border: "2px solid red",
}));

export const CourseImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));
