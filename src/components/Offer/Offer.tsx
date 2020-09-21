import React, { FunctionComponent, Fragment } from 'react';
import { Carousel } from "react-responsive-carousel";
import {
  makeStyles,
  Theme,
  createStyles, Grid, Paper
} from '@material-ui/core';
import Slide from './Slide/Slide';
import Skeleton from "react-loading-skeleton";
import { Status } from '../../model/Offer';
import _ from "lodash";


export interface Offers {
  offers: OfferProps;
  loadingStatus: string;
  offerLoad: (url: string) => void;
}

export interface OfferProps {
  cheapestDestination: Array<DestinationProps>;
  topDestination: Array<DestinationProps>;
  lastMinuteDefinition: Array<DestinationProps>;
}

export interface DestinationProps {
  id: string;
  name: string;
  description: string;
  accommodations: Array<AccommodationProps>;
}

export interface AccommodationProps {

  id: String;
  pricing: PricingProps;
  content: AccommodationContentProps;
}

export interface PricingProps {
  nights: number;
  nightlyPrice: NightlyPriceProps;
}

export interface NightlyPriceProps {
  currency: string;
  amount: string;
}

export interface AccommodationContentProps {
  name: String;
  image: string;
  address: AddressAccommodationProps;
}

export interface AddressAccommodationProps {
  city: string,
  state: string,
  country: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
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
        background: "rgba(0,0,0,0.30) !important",
      },
      "& .slide": {
        background: "rgba(0,0,0,0)",
      },
    },
  })
);
const OfferResults: FunctionComponent<Offers> = props => {
  const classes = useStyles();

  const topDestination = props.offers.topDestination;
  //const lastDestination = props.offers.lastMinuteDefinition;
  //const cheapestDestination = props.offers.cheapestDestination;

  const accommodationsGroup = topDestination.map((aux:DestinationProps ) => {
        return (aux.accommodations)
  });

  const slides: any = accommodationsGroup.map(
    (accommodations: Array<AccommodationProps>, index: number) => {
      return (
          <Slide 
              accommodations={accommodations}
              nameDestination={"por ahora hola"}
              key={index}
          />
      );
    }
  );
  
  const skeletons = () => {
    return (
      <Grid container className={classes.container}>
        <Grid item container xs={4}>
          <Paper className={classes.skeleton}>
            <Skeleton height={170} width="100%" />
          </Paper>
          <Paper className={classes.skeleton}>
            <Skeleton height={170} width="100%" />
          </Paper>
          <Paper className={classes.skeleton}>
            <Skeleton height={170} width="100%" />
          </Paper>
        </Grid>
      </Grid>
    );
  }


  const carousel = () => {
    return (
      <Carousel
        className={classes.carousel}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        {slides}
      </Carousel>
    );
  };


  return (
      <Fragment> { props.loadingStatus === Status.SUCCESS ? carousel() : skeletons()}
      </Fragment>
  )

}

export default OfferResults;