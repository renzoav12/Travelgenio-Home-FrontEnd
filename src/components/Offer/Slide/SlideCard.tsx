import React, { FunctionComponent } from "react";
import { AccommodationProps } from "../LastDestination";
import { Box, makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

import Card from "../Card/Card";


export interface Props {
    accommodations: Array<AccommodationProps>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        none: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
              width: "33%"
            },
            [theme.breakpoints.down("sm")]: {
              width: "50%"
            },
            [theme.breakpoints.down("xs")]: {
              width: "100%"
            },
            width: "25%",
          },
        slice: {
            display: "flex",
            marginTop: 10,
        },
        cards: {
            display: "flex",
            marginBottom: 15,
            marginRight: 18,
        },
        first: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
              minWidth: "33%"
            },
            [theme.breakpoints.down("sm")]: {
                minWidth: "50%"
            },
            [theme.breakpoints.up("lg")]: {
                minWidth: "25%",
                paddingRight: 20,
                width: "25%"
            }   
          },
        second: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
              marginLeft: 5,
              minWidth: "33%"
            },
            [theme.breakpoints.down("sm")]: {
                minWidth: "50%"
            },
            [theme.breakpoints.up("lg")]: {
                minWidth: "25%",
                paddingRight: 20,
                width: "25%"
            }   
          },
          third: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
              marginLeft: 5,
              minWidth: "33%"
            },
            [theme.breakpoints.between("sm","md")]:{
              marginLeft: 5,
          },
            [theme.breakpoints.down("sm")]: {
                minWidth: "50%"
            },
            [theme.breakpoints.up("lg")]: {
                width: "25%",
                minWidth: "25%"
            }         
          },
          four: {
            display: "flex",
            [theme.breakpoints.down("xs")]: {
              marginTop: 5
            },
            [theme.breakpoints.down("md")]: {
                minWidth: "33%"
            },
            [theme.breakpoints.down("sm")]: {
                minWidth: "50%"
            }
          },
    })
);

const SlideCard: FunctionComponent<Props> = (props) => {

    const classes = useStyles();

    const getClassName = (index: number): string => {
        if (index === 0 && props.accommodations.length > 1) {
          return classes.first;
        } else if (
          index + 1 === props.accommodations.length &&
          props.accommodations.length > 1
        ) {
          return classes.third;
        } else if (props.accommodations.length > 2) {
          return classes.second;
        } else {
          return classes.none;
        }
      };

    const cards: any = props.accommodations.map(
        (accommodation: AccommodationProps, index: number) => {
            return (
                <Box className={getClassName(index)}>
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
