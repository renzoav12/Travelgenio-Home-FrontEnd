import { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { DestinationProps } from "../LastDestination";
import { Grid } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideAccommodation from "../Slide/SlideAccommodation";

export interface Props {
  array: Array<DestinationProps>;
  status: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      paddingLeft: 20,
      paddingBottom: 20,
      paddingTop: 10
    },
    skeleton: {
      width: "100%",
      "& .MuiSkeleton-text": {
        transform: "none",
      },
    },
    middle: {
      width: "100%",
      marginLeft: 10,
      marginRight: 10,
    },
    carousel: {
      "& .carousel": {
        borderRadius: 5,
      },
      "& .control-arrow": {
         marginTop: 170,
         marginBottom: 170
      },
      "& .slide": {
        background: "none",
      }
    },
    typeOffer: {
      fontSize: "20pt",
      fontWeight: "bold",
      textAlign: "left",
      maxHeight: 60,
      overflowY: "hidden"

    },
    span: {
      width: "100%",
      fontWeight: 500,
      letterSpacing: 1.2,
      color: '#666666',
      fontSize: 12,
      paddingBottom: 5,
      paddingLeft: 6
    },
    nameDestination: {
      width: "100%",
      fontWeight: 700,
      lineHeight: 1.13,
      letterSpacing: -0.7,
      fontSize: 32,
      paddingBottom: 20,
      paddingLeft: 6
    },
    destinations: {
      paddingBottom: 40
    }
  })
);

const Offers: FunctionComponent<Props> = (props) => {
  const classes = useStyles();


  const offers: any = props.array.map(
    (region: DestinationProps, index: number) => {
    
      if (region.accommodations.length >= 2) {
      return (
        <Grid className={classes.destinations}>
          <Grid className={classes.span} >
            CONOCE
          </Grid>
          <Grid className={classes.nameDestination}>
            {region.name}
          </Grid> 
          <SlideAccommodation accommodations={region.accommodations}
                nameDestination={region.name} key={index} />
        </Grid>
      );
  }
  });

  return (
    <Grid className={classes.container}>
      {offers}
    </Grid>

  );
};

export default Offers;
