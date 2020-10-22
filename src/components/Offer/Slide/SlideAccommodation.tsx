import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { makeStyles, createStyles, Box } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SlideCard from "./SlideCard";
import _ from "lodash";
import { useMediaQuery } from "@material-ui/core";
import { Theme, useTheme } from "@material-ui/core/styles";


export interface Props {
    accommodations: Array<AccommodationProps>;
    nameDestination: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container2: {
            width: "100%",
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
            "& .carousel .control-next.control-arrow:before": {
                borderLeftColor: "rgba(111, 103, 103)"
            },
            "& .carousel .control-prev.control-arrow:before": {
                borderRightColor: "rgba(111, 103, 103)"
            },
            "& .carousel.carousel-slider .control-arrow": {
                borderRadius: 100,
                background: "#ffffff",
                width: 45,
                height: 46,
                [theme.breakpoints.down("xs")]:{
                    marginTop:"70%"
                },
                [theme.breakpoints.up("lg")]:{
                    marginTop:"19%"
                },
                [theme.breakpoints.between("sm","md")]:{
                    marginTop:"35%",
                    marginRight:"9%"
                },
                boxShadow: "-1px 3px 3px 0px #948d8d9c",
            },
            "& .carousel .control-arrow, .carousel.carousel-slider .control-arrow": {
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
            }, "& .carousel.carousel-slider": {
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

    const theme = useTheme();
    const smallCarousel = useMediaQuery(theme.breakpoints.down("xs")); //mobile -> true
    const mediumCarousel = useMediaQuery(theme.breakpoints.between("sm","md")); //mobile -> false
    const largeCarousel = useMediaQuery(theme.breakpoints.up("lg")); // mobile -> false

    
    const velueResponsive = () => {           
        if (smallCarousel){
            return 1;
        }
        if (mediumCarousel){
            return 2;
        }
        if (largeCarousel) {
            return 4;
        }
    }

    const classes = useStyles();

    const group: any = _.chunk(props.accommodations, velueResponsive());

    const slides: any = group.map(
        (accommodation: Array<AccommodationProps>, index: number) => {
            return (
                <SlideCard
                    key={index}
                    accommodations={accommodation} />
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
