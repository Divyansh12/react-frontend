import {
  container,
  mlAuto,
  section,
  main,
  mainRaised,
  title,
  cardTitle,
  roseColor
} from "assets/jss/material-kit-pro-react.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import customSelectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

const productStyle = {
  mlAuto,
  main,
  ...imagesStyles,
  ...customSelectStyle,
  ...tooltipsStyle,
  container: {
    ...container,
    zIndex: 2
  },
  mainRaised: {
    ...mainRaised
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  title: {
    ...title,
    marginBottom: 0
  },
  sectionGray: {
    background: "#e5e5e5"
  },
  mainPrice: {
    margin: "10px 0px 25px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  features: {
    paddingTop: "30px"
  },
  productPage: {
    backgroundColor: "#eee",
    "& $mainRaised": {
      margin: "-40vh 0 0",
      padding: "40px"
    },
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD"
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  },
  titleRow: {
    marginTop: "-8vh"
  },
  floatRight: {
    float: "right!important"
  },
  pageHeader: {
    minHeight: "60vh",
    maxHeight: "600px",
    height: "auto",
    backgroundPosition: "top center"
  },
  relatedProducts: {
    marginTop: "50px",
    "& $title": {
      marginBottom: "80px"
    }
  },
  pickSize: {
    marginTop: "10px"
  },
  pullRight: {
    float: "right"
  },
  cardCategory: {
    textAlign: "center",
    marginTop: "10px"
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "center"
  },
  cardDescription: {
    textAlign: "center",
    color: "#999"
  },
  textRose: {
    color: roseColor
  },
  justifyContentBetween: {
    justifyContent: "space-between!important"
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  }
};

export default productStyle;
