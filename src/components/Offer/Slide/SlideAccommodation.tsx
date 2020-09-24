import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import {Box, makeStyles, Theme, createStyles} from "@material-ui/core";
import Card from "../Card/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
            [theme.breakpoints.up("xs")]: {
                marginBottom: 5,
                marginRight: 0,
            },
            [theme.breakpoints.up("md")]: {
                marginBottom: 0,
                marginRight: 5,
            },
        },
        middle: {
            display: "flex",
            [theme.breakpoints.up("xs")]: {
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 0,
                marginRight: 0,
            },
            [theme.breakpoints.up("md")]: {
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 5,
                marginRight: 5,
            },
        },
        last: {
            display: "flex",
            [theme.breakpoints.up("xs")]: {
                marginTop: 5,
                marginLeft: 0,
            },
            [theme.breakpoints.up("md")]: {
                marginLeft: 5,
                marginTop: 0,
            },
        },
        slideContainer: {
            border: "1px dashed red",
        },
        carousel: {
            "& .carousel": {
                borderRadius: 7,
            },
            "& .control-arrow": {
                background: "rgba(0,0,0,0.30) !important",
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
    const getClassName = (index: number): string => {

        if (index === 0 && props.accommodations.length > 1) {
            return classes.first;
        } else if (
            index + 1 === props.accommodations.length &&
            props.accommodations.length > 1
        ) {
            return classes.last;
        } else if (props.accommodations.length > 2) {
            return classes.middle;
        } else {
            return classes.none;
        }
    };

    const cards: any = props.accommodations.map(
        (accommodation: AccommodationProps, index: number) => {
            return (
                <Box className={classes.box1}>
                    <Card
                        accommodation={accommodation}
                        nameDestination={props.nameDestination}
                    />
                </Box>

            );
        });

    return (
        <Box className={classes.box1}>
            <Carousel className={classes.carousel}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}>
                {cards}
            </Carousel>
        </Box>
    )
}

export default SlideAccommodation;
