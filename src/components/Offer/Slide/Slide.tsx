import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { Box, makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import Card from "../Card/Card";


export interface Props {
    accommodations: Array<AccommodationProps>;
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

const SlideCard: FunctionComponent<Props> = (props) => {

    const classes = useStyles();

    const cards: any = props.accommodations.map(
        (accommodation: AccommodationProps, index: number) => {
            return (
                <Box className={classes.first}>
                    <Card
                        accommodation={accommodation}
                        key={Number(accommodation.id)} />
                </Box>
            );
    });


    return (
        <Grid container item xs={4} md={12}>
            {cards}
        </Grid>
    )
}

export default SlideCard;
