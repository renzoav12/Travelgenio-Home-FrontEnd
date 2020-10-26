import { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { DestinationProps } from "../LastDestination";
import { Box } from "@material-ui/core";
import PaintingSquare, { PromotionEntry } from '../../PaintingSquare/PaintingSquare';

import React from "react";
import SlideAccommodation from "../Slide/SlideAccommodation";
import SkeletonCard from "./SkeletonCard";
import { Status } from "../../../model/Offer";

export interface Props {
  array: Array<DestinationProps>;
  status: string;
  promotions: PromotionEntry[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      paddingBottom: 20,
      paddingTop: 40
    },
    nameDestination: {
      width: "100%",
      fontWeight: 700,
      lineHeight: 1.13,
      letterSpacing: -0.7,
      fontSize: 32,
      paddingBottom: 20,
      paddingLeft: 0
    },
    destination: {
      marginTop: 10,
      paddingBottom: 40,
    }
  })
);

const Offers: FunctionComponent<Props> = (props) => {
  const classes = useStyles();


  const offers: any = props.array.map(
    (region: DestinationProps, index: number) => {
        return (
          <Box className={classes.destination}>
            <Box className={classes.nameDestination}>
              {region.name}
            </Box>
            <SlideAccommodation accommodations={region.accommodations}
              nameDestination={region.name} key={index} />
          </Box>
        );
    });

  const chargueOffers = () => {
      if (props.status === Status.LOADING) {
        return (<SkeletonCard />)
      }

      if (props.status !==  Status.SUCCESS) {
        return (<PaintingSquare loading ={true} promotions = {props.promotions}/>)
      }

      if ( props.status ===  Status.SUCCESS) {
        return offers;
      }
  }

  return (
    <Box className={classes.container}>
      {chargueOffers()}
    </Box>

  );
};

export default Offers;
