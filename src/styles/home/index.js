import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { colors } from "../theme";

export const CoursesContainer = styled(Grid)(({ matches }) => ({
  boxSizing: "border-box",
  // backgroundColor: "red",
//   border: "5px solid red",
}));

export const QuickLinksContainer = styled(Grid)(({ matches }) => ({
  boxSizing: "border-box",
  // backgroundColor: "red",
//   border: "5px solid red",
}));

export const QuickLinkContainer = styled(Grid)(({ matches }) => ({
  padding: matches ? "15px" : "30px",
  boxSizing: "border-box",
  "&:hover": {
    cursor: "pointer",
  },
  // backgroundColor: `${colors.white}`,
  // borderRadius:"10px",
//   border: "5px solid green",
}));

export const QuickLinkCard = styled(Card)(({ matches }) => ({
  boxSizing: "border-box",
  position: "relative",
  minWidth: "100px",
  // minHeight: "200px",
  maxWidth: matches ? "100%" : "350px",
  margin: "5px auto",
  // border: "5px solid blue",
}));

export const QuickLinkCardHeader = styled(CardHeader)(
  ({ title, subheader }) => ({
    color: `${colors.textPrimary}`,
    title: title,
    subheader: subheader,
  })
);

//   export const CourseCardMedia = styled(CardMedia)(({ image, title }) => ({
//     height: "200px",
//     image: image,
//     title: title,
//   }));

export const QuickLinkCardContent = styled(CardContent)(() => ({
  padding: "0px 10px",
//   border: "5px solid yellow",
}));

export const TopicChip = styled(Chip)(() => ({
  margin: "4px 2px",
  // border: "5px solid yellow",
  "&:hover": {
    backgroundColor: `${colors.primary}`,
    color: `${colors.white}`,
    transform: "scale(1.1,1.1)",
  },
}));

export const BecomeToturText = styled(Typography)(() => ({
  padding: "5px",
  color: `${colors.textSecondary}`,
  // color: `${colors.white}`,
}));

export const CourseName = styled(Typography)(() => ({
  textTransform: "capitalize",
  padding: "8px 16px",
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
