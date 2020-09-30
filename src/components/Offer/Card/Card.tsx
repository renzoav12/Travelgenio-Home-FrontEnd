import React, { FunctionComponent } from "react";
import { Grid, Paper } from "@material-ui/core";
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
      height: 440,
      width: 265,
      borderRadius: 10,

    },
    pricing: {
        marginTop: 24
    },
    gridExample: {
      width: height_proportion
    },
    category: {
      paddingLeft: 8,
      paddingTop: 8
    },
    image: {
      borderRadius: 10
    },
    offerType: {
        borderRadius: '35 0 35 0',
        MozBorderRadius: '35 0 35 0',
        WebkitBorderRadius: '35 0 35 0',
        border: 2,      
    }
  })
);

const Card: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Grid container >
        <Grid item xs={12} className={classes.image}>
        <Image image={props.accommodation.content.image}></Image>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={12}>
           <Content 
              content={props.accommodation.content} 
              pricing={props.accommodation.pricing}  />
          </Grid>
          <Grid className={classes.category}  item xs={12} container>
              <Category stars={parseInt(props.accommodation.content.category.code)} />
          </Grid>

          <Grid container item xs={12} className={classes.pricing}>
              <Grid className={"caja"}>
                    
                    <span className={"caja"}>{props.accommodation.type}</span>
              </Grid>
            <Pricing pricing={props.accommodation.pricing}
                      checkIn={props.accommodation.checkIn} checkOut={props.accommodation.checkOut}
                      accommodationId={props.accommodation.id}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
