import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

export const CoursesContainer = styled(Grid)(() => ({
  boxSizing: "border-box",
  // backgroundColor: "red",
  border: "5px solid red",
}));

export const CourseContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "15px" : "30px",
  boxSizing: "border-box",
  "&:hover": {
    cursor: "pointer",
  },
  // backgroundColor: "green",
  border: "5px solid green",
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
    "& .overlay": {
      backgroundColor: "rgba(0,0,100,0.25)",
    },
    "& .track-name": {
      transform: "scale(1,1)",
      visibility: "visible",
    },
    "& .course-name": {
      color: `${colors.primary}`,
    },
    "& .track-preview": {
      transform: "translate(-50%, -300%) scale(1.5,1.5)", 
      visibility: "visible",
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
  image: image,
  title: title,

  "& .overlay": {
    width: "100%",
    height: "100%",
    transition: "background 0.5s ease",
  },

}));

export const TrackName = styled(Typography)(() => ({
  position: "absolute",
  top: "10px",
  left: "10px", 
  borderRadius:"10px",
  textTransform: "capitalize",
  textAlign: "center",
  color: `${colors.white}`,
  padding: "8px",
  width: "fit-content",
  backgroundColor: "rgba(0,0,200,0.25)",
  visibility: "hidden",
  transition: "transform 0.5s ease",
  transform: "scale(0.5,0.5)",
  // border: "2px solid blue",
}));

export const TrackPreview = styled(Typography)(() => ({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0,0)", 
  visibility: "hidden",
  borderRadius:"10px",
  textTransform: "capitalize",
  textAlign: "center",
  color: `${colors.white}`,
  padding: "8px",
  width: "fit-content",
  transition: "transform 0.5s ease",
  // border: "2px solid blue",
}));

// export const CourseCardContent = styled(CardContent)(() => ({
//   border: "5px solid yellow",
// }));

export const CourseName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "8px",
  overflow:"hidden",
  textOverflow:"ellipsis",
  whiteSpace:"nowrap",
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

export const CourseContent = styled(Stack)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches ? "100%" : "50%",
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

export const CourseImageContaimer = styled(Box)(({ matches }) => ({
  flexGrow: 1,
  maxWidth: matches ? "100%" : "50%",
  // border: "2px solid red",
}));

export const CourseImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  objectFit:"cover",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));

export const CoursesCount = styled(Typography)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  margin:"5px",
}));

export const CourseState= styled(Typography)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
}));

export const CourseDetailsStack = styled(Stack)(() => ({
  textTransform: "capitalize",
  padding: "8px",
  color: `${colors.textPrimary}`,
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  "&.enrolled-students":{
    padding:"0px",
    margin:"0px",
    width:"fit-content",
  },
  // border: "5px solid blue",
}));


// lesson section ...........................................................................
export const LessonVideo = styled("video")(() => ({
  width: "100%",
  maxHeight: "800px",
  boxSizing: "border-box",
  // border: "2px solid green",
}));
export const LessonSource = styled("source")(({ src, type }) => ({
  src: src,
  type: type,
  border: "2px solid red",
}));

export const LessonDescription = styled(Typography)(() => ({
  color: `${colors.textSecondary}`,
  padding: "10px 20px",
  textTransform: "capitalize",
  marginBottom: "10px",
  lineHeight: "35px",
  "&:hover": {
    color: `${colors.textPrimary}`,
  },
}));

export const HorizontalStack = styled(Stack)(() => ({
  width: "fit-content",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // border: "2px solid red",
}));
export const VerticalStack = styled(Stack)(() => ({
  width: "fit-content",
  flexDirection: "column",
  // justifyContent:"center",
  // alignItems:"center",
  // border: "2px solid green",
}));

export const IconContainer = styled(IconButton)(() => ({
  color: "inherit",
  width: "40px",
  height: "40px",
  margin: "1px",
  // border: `1px solid ${colors.primary}`,
  // backgroundColor: `${colors.iconContainer}`,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: `${colors.white}`,
    scale: "1.1",
  },
  // border: "2px solid red"
}));

export const CustomForm = styled("form")(({ matches }) => ({
  width: matches ? "80%" : "40%",
  minWidth: matches ? "300px" : "400px",
  minWidth: "100%",
  marginBottom: "20px",
  // marginInline:"auto",
  // marginBlock:matches?"70px 0px":"200px 0px",
  // border:"2px solid red",
}));

export const CommentContainer = styled(Box)(() => ({
  // border: "2px solid blue",
}));

export const CommentBody = styled(Typography)(() => ({
  width: "fit-content",
  padding: "10px 20px",
  margin: "5px 10px",
  borderRadius: "5px",
  color: `${colors.textPrimary}`,
  backgroundColor: `${colors.iconContainer}`,
  // border: "2px solid blue",
}));
