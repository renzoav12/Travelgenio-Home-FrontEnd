import React, { FunctionComponent } from 'react';
import {
  makeStyles,
  Theme,
  createStyles, Grid, Paper, Box,
} from '@material-ui/core';

import Skeleton from "react-loading-skeleton";
import { Status } from '../../model/Offer';
import _ from "lodash";
import SlideAccommodation from './Slide/SlideAccommodation';


export interface Offers {
  offers: Array<DestinationProps>;
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
  name: string;
  image: string;
  address: AddressAccommodationProps;
  category: CategoryAccommodationProps;
}

export interface AddressAccommodationProps {
  city: string,
  state: string,
  country: string
}

export interface CategoryAccommodationProps {
  code: string,
  name: string
}

const aux2 = '32%';

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
    aux: {
      width: aux2,
      paddingLeft: 60
    },
    typeOffer: {
        fontSize: "20pt",
        fontWeight: "bold",
        textAlign: "left",
        maxHeight: 60,
        overflowY: "hidden"
      
    }
  })
);
const LastDestination: FunctionComponent<Offers> = props => {
  const classes = useStyles();

  const slides = (accommodationsGroup: Array<AccommodationProps>,
                  name: string, index:number) => {
      if (name === "no_city") {
          return null;
      }   
      return (
        <SlideAccommodation
          accommodations={accommodationsGroup}
          nameDestination={name}
          key={index}
        />
      );
  };

  const accommodationsGroup: any =  props.offers.map(
    (aux: DestinationProps, index:number) => {
      const accommodations = aux.accommodations;
      const nameDestination = aux.name;
      return slides(accommodations,nameDestination, index);

 });

  const skeletons = () => {
    return (
      <Box>
        <Grid item container >
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
      </Box>
    );
  }
  return (
    <Grid className={classes.aux}>
      <Grid> 
        <span className={classes.typeOffer}> ULTIMOS DESTINOS </span>
      </Grid>
      {props.loadingStatus === Status.SUCCESS ? accommodationsGroup : skeletons()}
    </Grid>
  )

}

export default LastDestination;