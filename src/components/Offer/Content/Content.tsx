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
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 0
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
      height: "100%"
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
      paddingTop: 10
    }
  })
);

const Content: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.content}>
      <Grid className={classes.contentTwo} item xs={12} container >
          <Grid className={classes.nameAccommodation}>{props.content.name}</Grid> 
          <Grid className={classes.nameCity}>{props.content.address.state}</Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
