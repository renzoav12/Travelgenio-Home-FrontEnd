import React, { FunctionComponent } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccommodationProps } from "../Offer";
import Image from "./../Image/Image";
import Content from "../Content/Content";
import Pricing from "../Pricing/Pricing";

export interface Props {
  accommodation: AccommodationProps;
  nameDestination: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: 0,
    },
    pricing: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  })
);

const Card: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Grid container>
        <Grid item xs={6}>
        <Image image={props.accommodation.content.image}></Image>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item xs={12}>
           <Content content={props.accommodation.content} pricing={props.accommodation.pricing} nameDestination={props.nameDestination} />
          </Grid>
          <Grid container item xs={12} className={classes.pricing}>
            <Pricing pricing={props.accommodation.pricing}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
