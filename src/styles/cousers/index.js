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
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";


export const CoursesContainer = styled(Grid)(({ matches }) => ({
  // padding: matches ? "0px" : "0px 100px",
  boxSizing:"border-box",
  // border: "5px solid green",
}));

export const CourseContainer = styled(Grid)(({ matches }) => ({
    padding: matches ? "15px" : "30px",
    boxSizing:"border-box",

    zIndex:"100000",
    "&:hover": {
     cursor:"pointer",
    },
    // border: "5px solid red",
}));
export const CourseCard = styled(Card)(({matches}) => ({
    boxSizing:"border-box",
    position: "relative",

    minWidth: "200px",
    minHeight: "300px",
    maxWidth: matches?"100%":"350px",

    margin: "5px auto",
    // flexGrow:1,
    // border: "5px solid blue",
  }));
  export const CourseCardHeader = styled(CardHeader)(({ title }) => ({
    title: title,
  }));
  export const CourseCardMedia = styled(CardMedia)(({ image, title }) => ({
    height: "200px",
    // margin:"0px 10px",
    // borderRadius:"5px",
  image: image,
  title: title,
}));

export const CourseCardContent = styled(CardContent)(() => ({
  padding:"0px 16px",
  // padding:"5px 10px 0px 10px",
  // border: "5px solid blue",
}));

export const CourseName = styled(Typography)(() => ({
  textTransform: "capitalize",
  color: `${colors.primaryText}`,
  // border: "5px solid blue",
}));

export const CourseCardActions = styled(CardActions)(() => ({
  // padding:"0px 10px",
  padding:"0px 16px 16px 16px",
  // border: "5px solid blue",
}));

export const ViewCourse = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  padding:"5px 10px",
  borderRadius: "50px",
  color: `${colors.white}`,
  backgroundColor: `${colors.primary}`,
  "&:hover": {
    backgroundColor: `${colors.primary}`,
    scale:"1.05",
  },
}));

export const IconContainer = styled(IconButton)(() => ({
  position: "absolute",
  top: "10px",
  right: "-50px",
  width: "45px",
  height: "45px",
  transition: "0.5s ease",
  
  backgroundColor: `${colors.iconContainer}`,
  color: `${colors.primaryText}`,
  "&:hover": {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
}));
