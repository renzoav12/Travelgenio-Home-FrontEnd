import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../Offer";
import {
    Grid, Box,
    makeStyles, Theme, createStyles
} from "@material-ui/core";
import Card from "../Card/Card";

export interface Props {
    accommodations: Array<AccommodationProps>;
    nameDestination: string;
}
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
    })
);

const Slide: FunctionComponent<Props> = (props) => {

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
            
            <Grid container item xs={12} md={4} key={index}>
                <Box className={getClassName(index)}>
                    <Card
                        accommodation={accommodation}
                        nameDestination={props.nameDestination}
                    />
                </Box>
            </Grid>
        );

    });




    return <Grid container alignItems="stretch">
        {cards}
    </Grid>;


}

export default Slide;
