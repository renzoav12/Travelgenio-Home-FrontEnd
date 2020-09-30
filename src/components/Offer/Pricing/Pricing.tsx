import React, { FunctionComponent } from "react";
import { Box, Button } from "@material-ui/core";
import Keys from "@hotels/translation-keys";
import Translate from "@hotels/translation";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PricingProps } from "../LastDestination";
import { useHistory } from "react-router-dom";

export interface Props {
  pricing: PricingProps;
  checkIn: string;
  checkOut: string;
  accommodationId: String;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pricing: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 12
    },
    stayPrice: {
      color: theme.palette.primary.main,
      fontSize: "16pt",
      fontWeight: "bold",
    },
    nightlyPrice: {
      fontSize: "8pt",
      display: "flex",
      justifyContent: "flex-end",
    },
    detail: {
      marginTop: 10,
    },
  })
);



const Pricing: FunctionComponent<Props> = (props) => {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/hotels/detail/Hotel-${props.accommodationId}/${props.checkIn}/${props.checkOut}/${props.pricing.nights}`; 
    history.push(path);
  }

  const classes = useStyles();
  return (
    <Box className={classes.pricing}>
      <Box className={classes.stayPrice}>
        {props.pricing.nightlyPrice.amount} {props.pricing.nightlyPrice.currency}
      </Box>
      <Box className={classes.nightlyPrice}>
        {props.pricing.nightlyPrice.amount}{" "}
        {props.pricing.nightlyPrice.currency}{" "}
        <Translate tkey={Keys.search.by_night} />
      </Box>
      <Box className={classes.detail}>
        <Button onClick={routeChange}
          variant="contained"
          color="primary"
          fullWidth      
        >
          <Translate tkey={Keys.search.see_detail} />
        </Button>
      </Box>
    </Box>
  );
};

export default Pricing;
