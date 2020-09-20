import React, { FunctionComponent } from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccommodationContentProps, PricingProps } from "../Offer";

export interface Props {
  content: AccommodationContentProps;
  pricing: PricingProps;
  nameDestination: string;
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
      fontSize: "12pt",
      fontWeight: "bold",
      textAlign: "left",
      maxHeight: 60,
      overflowY: "hidden"
    },
  })
);

const Content: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.content}>
      <Grid item xs={12} container>
      <Box className={classes.nameCity}>{props.content.name}</Box>
        <Box className={classes.name}>{props.nameDestination === "no_city" ? 
              props.content.address.city : props.nameDestination}</Box>
      </Grid>
      <Grid item xs={12} container>
      </Grid>
    </Grid>
  );
};

export default Content;
