import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { Box, makeStyles, Theme, createStyles } from "@material-ui/core";
import Card from "../Card/Card";


export interface Props {
    accommodations: Array<AccommodationProps>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        slice: {
            display: "flex",
            marginTop: 10,
        },
        cards: {
            display: "flex",
                marginBottom: 15,
                marginRight: 18,
                marginLeft: 5
        }
    })
);

const SlideCard: FunctionComponent<Props> = (props) => {

    const classes = useStyles();

    const cards: any = props.accommodations.map(
        (accommodation: AccommodationProps, index: number) => {
            return (
                <Box className={classes.cards}>
                    <Card
                        accommodation={accommodation}
                        key={Number(accommodation.id)} />
                </Box>
            );
    });


    return (
        <Box className={classes.slice}>
            {cards}
        </Box>
    )
}

export default SlideCard;
