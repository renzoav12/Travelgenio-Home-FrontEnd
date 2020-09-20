import React, { FunctionComponent } from "react";
import { Box, Button } from "@material-ui/core";
import Keys from "@hotels/translation-keys";
import Translate from "@hotels/translation";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PricingProps } from "../Offer";

export interface Props {
  pricing: PricingProps;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pricing: {
      paddingTop: 0,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
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
        <Button
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
