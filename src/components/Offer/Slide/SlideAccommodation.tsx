import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { makeStyles, createStyles } from "@material-ui/core";

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
        container: {
            width: "100%",
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
                    marginTop:"30%",
                },
                [theme.breakpoints.up("lg")]:{
                    marginTop:"19%"
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
    const xs = useMediaQuery(theme.breakpoints.down("xs")); //mobile -> true
    const sm = useMediaQuery(theme.breakpoints.down("sm")); //mobile -> false
    const md = useMediaQuery(theme.breakpoints.down("md")); //mobile -> false
    const lg = useMediaQuery(theme.breakpoints.up("lg")); // mobile -> false
    
    const velueResponsive = () => { 
        if (lg) {
            return 4;
        }          
        if (xs){
            return 1;
        }
        if (sm){
            console.log("entra aca");
            return 2;
        }
        if (md) {
            return 3;
        }
        if (lg) {
            console.log("return 4");
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
        
            carousel()
    )
}

export default SlideAccommodation;
