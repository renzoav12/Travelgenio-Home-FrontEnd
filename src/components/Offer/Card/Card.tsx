import React, { FunctionComponent } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccommodationProps } from "../LastDestination";
import Image from "./../Image/Image";
import Content from "../Content/Content";
import Pricing from "../Pricing/Pricing";
import Category from "@hotels/category";
import './../Style/offerType.scss';


export interface Props {
  accommodation: AccommodationProps;
}
const height_proportion = '33.3%';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: 0,
      [theme.breakpoints.down("xs")]:{
        height: 484,
        width: "100%",
      },
      [theme.breakpoints.down("sm")]:{
        height: 484,
        width: "100%",
      },
      [theme.breakpoints.down("md")]:{
        height: 484,
        width: "100%",
      },
      [theme.breakpoints.up("lg")]:{
        height: 456,
        width: "100%",
        minWidth: "25%"
      },
      borderRadius: 10,
    },
    pricing: {
        marginTop: 7,
        position: 'static',
        borderTop: '1px solid #C0C6D1'
    },
    category: {
      paddingLeft: 16,
      paddingTop: 1,
      height: 30,
      display: "flex"
    },
    image: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      display: "flex"
    }
  })
);

const Card: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Box >
        <Box className={classes.image}>
        <Image image={props.accommodation.content.image}></Image>
        </Box>
        <Box>
           <Content 
              content={props.accommodation.content} 
              pricing={props.accommodation.pricing}  />
        <Box className={classes.category}>
            <Category stars={parseInt(props.accommodation.content.category.code)} />
        </Box>

        <Box  className={classes.pricing}>
            <Pricing pricing={props.accommodation.pricing}
                      checkIn={props.accommodation.checkIn} checkOut={props.accommodation.checkOut}
                      accommodationId={props.accommodation.id}/>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Card;
