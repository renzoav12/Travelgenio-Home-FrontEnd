import React, { FunctionComponent } from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccommodationContentProps, PricingProps } from "../LastDestination";

export interface Props {
  content: AccommodationContentProps;
  pricing: PricingProps;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 10,
      paddingBottom: 0,
      width: "100%",
      position: "static"
    },
    name: {
      fontSize: "10pt",
      textAlign: "left",
      maxHeight: 60,
      overflowY: "hidden"
    },
    nameCity: {
      fontSize: "15px",
      fontWeight: 400,
      textAlign: "left",
      maxHeight: 60,
      overflowY: "hidden",
      width: "100%",
      height: "100%",
      paddingLeft: 20
    },
    nameAccommodation: {
      fontSize: 24,
      fontWeight: 700 ,
      textAlign: "left",
      maxHeight: 60,
      overflowY: "hidden",
      width: "100%",
      lineHeight: "28px",
      height: 80
    },
    contentTwo: {
      paddingTop: 4,
      position: "static",
      height: 30
    }
  })
);

const Content: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  
  return (
    <Box >
      <Box className={classes.content}>
          <Box className={classes.nameAccommodation}>{props.content.name}</Box> 
      </Box>
      <Box className={classes.contentTwo}>
          <Box className={classes.nameCity}>{props.content.address.state.length > 2 ?
           props.content.address.state : " "}</Box>
      </Box>
    </Box>
  );
};

export default Content;
