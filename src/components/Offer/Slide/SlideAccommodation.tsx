import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SlideCard from "./Slide";
import _ from "lodash";


export interface Props {
    accommodations: Array<AccommodationProps>;
    nameDestination: string;
}

const height_proportion = '26.6%';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        none: {
            display: "flex",
            marginTop: 10,
        },
        first: {
            display: "flex",
                marginBottom: 15,
                marginRight: 18,
                marginLeft: 5
        },
        slideContainer: {
            border: "1px dashed red",
        },
        carousel: {
            "& .carousel .control-next.control-arrow:before":{
                borderLeftColor: "rgba(111, 103, 103)"      
            },
            "& .carousel .control-prev.control-arrow:before": {
                borderRightColor: "rgba(111, 103, 103)"     
            },
            "& .carousel.carousel-slider .control-arrow" :{
                marginTop: 185,
                marginBottom: 185,
                borderRadius: 77,
                background:"#ffffff",
                marginRight: 40  
            },
            "& .carousel .control-arrow, .carousel.carousel-slider .control-arrow" :{
                opacity: 10
            },
            "& .carousel": {
                borderRadius: 10,
            },
            "& .control-arrow": {
                background: "#ffffff !important",
            },
            "& .slide": {
                background: "rgba(0,0,0,0)",
            },
            paddingBottom: 6,
            paddingTop: 6

        },
        boxCarousel: {
            width: height_proportion
        },
        box1: {
            height: 420
        }
    })
);

const SlideAccommodation: FunctionComponent<Props> = (props) => {

    const classes = useStyles();

    const group: any = _.chunk(props.accommodations, 4);

    const slides:  any = group.map(
        (accommodation: Array<AccommodationProps>, index: number) => {
            return (
                <SlideCard
                    key={index}
                    accommodations={accommodation}/>
            );
        }
    );

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
        <Grid container item xs={4} md={12}>
            {carousel()}
        </Grid>
    )
}

export default SlideAccommodation;
