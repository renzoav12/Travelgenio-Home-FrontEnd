import { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import React from "react";
import loadingHotelImage from "./../../../assets/images/loadingHotel.jpg";
import Skeleton from "react-loading-skeleton";
import Img from 'react-image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      paddingBottom: 20,
      paddingTop: 40
    },
    skeleton: {
      "& .MuiSkeleton-text": {
        transform: "none",
      },
      padding: 0,
      [theme.breakpoints.down("xs")]:{
        height: 484,
        width: 318,
      },
      height: 456,
      width: 281,
      borderRadius: 10
    },
    first: {
      display: "flex",
          marginBottom: 15,
          marginRight: 18,
          [theme.breakpoints.down("xs")]:{
            marginLeft:14
          },
          [theme.breakpoints.between("sm","md")]:{
            marginLeft: 24,
            marginRight: 20
        },
          marginLeft: 5
    },
    loadingImage:{
      width: '100%',
      height: '44%',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },
  box:{
    marginTop: 7
  },
  box2:{
    marginTop: 20
  },
  box3:{
    marginTop: 20,
    paddingLeft: "50%"
  },
  box4:{
    marginTop: 10,
    paddingLeft: "50%"
  },

  })
);

const SkeletonCard: FunctionComponent<any> = (props) => {
  const classes = useStyles();

  const loadingImage = <Img src={loadingHotelImage} className={classes.loadingImage}/>;

      return (
        <Grid container className={classes.container}>
            <Box className={classes.first}>
                <Paper className={classes.skeleton}>
                {loadingImage}  
                <Box className={classes.box}>
                    <Skeleton height={"40px"} width={"80%"}></Skeleton>
                </Box>
                <Box className={classes.box} >
                    <Skeleton height={"20px"} width={"50%"}></Skeleton>
                </Box>  
                <Box className={classes.box2} >
                    <Skeleton height={"20px"} width={"30%"}></Skeleton>
                </Box>  
                <Box className={classes.box3} >
                    <Skeleton height={"20px"} width={"100%"}></Skeleton>
                </Box>  
                <Box className={classes.box4} >
                    <Skeleton height={"33px"} width={"100%"}></Skeleton>
                </Box>  
              </Paper>   
            </Box>
            <Box className={classes.first}>
                <Paper className={classes.skeleton}>
                {loadingImage} 
                <Box className={classes.box}>
                    <Skeleton height={"40px"} width={"80%"}></Skeleton>
                </Box> 
                <Box className={classes.box} >
                    <Skeleton height={"20px"} width={"50%"}></Skeleton>
                </Box>  
                <Box className={classes.box2} >
                    <Skeleton height={"20px"} width={"30%"}></Skeleton>
                </Box>  
                <Box className={classes.box3} >
                    <Skeleton height={"20px"} width={"100%"}></Skeleton>
                </Box>  
                <Box className={classes.box4} >
                    <Skeleton height={"33px"} width={"100%"}></Skeleton>
                </Box> 
                </Paper>
            </Box>
            <Box className={classes.first}>
                <Paper className={classes.skeleton}>
                {loadingImage}
                <Box className={classes.box}>
                    <Skeleton height={"40px"} width={"80%"}></Skeleton>
                </Box> 
                <Box className={classes.box} >
                    <Skeleton height={"20px"} width={"50%"}></Skeleton>
                </Box>  
                <Box className={classes.box2} >
                    <Skeleton height={"20px"} width={"30%"}></Skeleton>
                </Box>  
                <Box className={classes.box3} >
                    <Skeleton height={"20px"} width={"100%"}></Skeleton>
                </Box>  
                <Box className={classes.box4} >
                    <Skeleton height={"33px"} width={"100%"}></Skeleton>
                </Box> 
                </Paper>
            </Box>
            <Box className={classes.first}>
                <Paper className={classes.skeleton}>
                {loadingImage}
                <Box className={classes.box} >
                    <Skeleton height={"40px"} width={"80%"}></Skeleton>
                </Box> 
                <Box className={classes.box} >
                    <Skeleton height={"20px"} width={"50%"}></Skeleton>
                </Box> 
                <Box className={classes.box2} >
                    <Skeleton height={"20px"} width={"30%"}></Skeleton>
                </Box>     
                <Box className={classes.box3} >
                    <Skeleton height={"20px"} width={"100%"}></Skeleton>
                </Box>  
                <Box className={classes.box4} >
                    <Skeleton height={"33px"} width={"100%"}></Skeleton>
                </Box> 
                </Paper>
            </Box>
        </Grid>
      );
};


export default SkeletonCard;
