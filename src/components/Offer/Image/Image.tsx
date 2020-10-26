import React, { FunctionComponent } from "react";
import { Box } from "@material-ui/core";
import Img from "react-image";
import loadingImage from "./../../../assets/images/loadingHotel.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface Props {
  image: string;
}

const loadingComponent = () => <img src={loadingImage} alt="" />;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardImage: {
      margin: 0,
      borderRadius: 10,
      width: "100%"
    },
    image: {
      "& figure": {
        height: 180,
        width: "100%",
        overflow: "hidden",
        margin: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
    },
  })
);

const Image: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardImage}>
      <Box className={classes.image}>
        <figure>
          <Img
            src={props.image}
            loader={loadingComponent()}
            unloader={loadingComponent()}
            alt=""
          />
        </figure>
      </Box>
    </Box>
  );
};

export default Image;
