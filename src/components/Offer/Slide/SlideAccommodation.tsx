import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { makeStyles, Theme, createStyles, Box } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SlideCard from "./SlideRegion";
import _ from "lodash";


export interface Props {
    accommodations: Array<AccommodationProps>;
    nameDestination: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container2: {
            width:"100%",
            display: "flex"
        },
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
                borderRadius: 100,
                background:"#ffffff",
                width: 45,
                height: 46,
                marginTop: "19%",
                boxShadow: "-1px 3px 3px 0px #948d8d9c",
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
            },"& .carousel.carousel-slider": {
                display: 'flex',
                position: 'flex'
            },
            width: "100%",
            paddingBottom: 6,
            paddingTop: 6

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
        <Box className={classes.container2}>
            {carousel()}
        </Box>
    )
}

export default SlideAccommodation;
