import React, { FunctionComponent, Fragment } from 'react';
import {
  makeStyles,
  Theme,
  createStyles, Grid, Paper
} from '@material-ui/core';
import Slide from './Slide/Slide';
import Skeleton from "react-loading-skeleton";
import { Status } from '../../model/Offer';

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
    card: {
      marginTop: 20,
    },
    skeleton: {
      width: "100%",
      "& .MuiSkeleton-text": {
        transform: "none",
      },
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(48.6),
        height: theme.spacing(80),
      },
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }, carousel: {
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

  const destination = (destinations: Array<DestinationProps>) => {
    return (destinations.map((destination: DestinationProps , index: number) => {
      return (
            <Slide nameDestination = {destination.name} 
                   id={destination.id}
                   accommodations = {destination.accommodations}
                   key={index}
             />
      );
    }));
  }

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

  const getLastDestination = () => {
    if (props.offers.lastMinuteDefinition.length <= 1) {
      return null;
    }
    return (
        destination(props.offers.cheapestDestination)

    )
  };
  return (
      <Fragment> { props.loadingStatus === Status.SUCCESS ? getLastDestination() : skeletons()}
      </Fragment>
  )

}

export default OfferResults;