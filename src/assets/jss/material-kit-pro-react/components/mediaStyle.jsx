import { title } from "../../material-kit-pro-react.jsx";

const mediaStyle = {
  media: {
    display: "flex",
    WebkitBoxAlign: "start",
    alignItems: "flex-start",
    "& p": {
      color: "#999999",
      fontSize: "1rem",
      lineHeight: "1.6em"
    },
    "& $media $mediaBody": {
      paddingRight: "0px"
    }
  },
  mediaLink: {
    padding: "10px",
    float: "left !important"
  },
  mediaAvatar: {
    margin: "0 auto",
    width: "64px",
    height: "64px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "15px",
    boxShadow:
      "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)",
    "& img": {
      width: "100%"
    }
  },
  mediaBody: {
    paddingRight: "10px",
    WebkitBoxFlex: "1",
    flex: "1"
  },
  mediaHeading: {
    ...title,
    marginTop: "10px",
    marginBottom: "10px",
    "& small": {
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace !important'
    }
  },
  mediaFooter: {
    "& button, & a": {
      marginBottom: "20px"
    },
    "&:after": {
      display: "table",
      content: '" "',
      clear: "both"
    }
  }
};

export default mediaStyle;
