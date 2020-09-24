import React, { FunctionComponent } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccommodationProps } from "../LastDestination";
import Image from "./../Image/Image";
import Content from "../Content/Content";
import Pricing from "../Pricing/Pricing";
import Category from "@hotels/category";


export interface Props {
  accommodation: AccommodationProps;
  nameDestination: string;
}
const height_proportion = '33.3%';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: 0,
      height: 400,
      width: 297,
      border: 10
    },
    pricing: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    gridExample: {
      width: height_proportion
    },
    category: {
      paddingLeft: 8,
      paddingTop: 8
    }
  })
);

const Card: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Grid container >
        <Grid item xs={12}>
        <Image image={props.accommodation.content.image}></Image>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={12}>
           <Content 
              content={props.accommodation.content} 
              pricing={props.accommodation.pricing} 
              nameDestination={props.nameDestination} />
          </Grid>
          <Grid className={classes.category}  item xs={12} container>
              <Category stars={parseInt(props.accommodation.content.category.code)} />
          </Grid>
          <Grid container item xs={12} className={classes.pricing}>
            <Pricing pricing={props.accommodation.pricing}/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
