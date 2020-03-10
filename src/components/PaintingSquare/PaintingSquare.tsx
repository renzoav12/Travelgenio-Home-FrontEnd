import React, { FunctionComponent } from 'react';
import { GridList,GridListTileBar, GridListTile } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Data from './Data';
import './PaintingSquare.scss';
import Img from 'react-image';

export interface ImagesProps {
    loading: boolean;
    promotions:PromotionEntry[];
}

export interface PromotionEntry{
    description:string;
    title: string;
    urlImage: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paintingSquare: {
      marginTop: 20,
      width: "100%"
    },
    gridList:{
        width: "100%"
    },
    img:{
      width: "100%",
      borderRadius: 5
    }
  }),
);

const PaintingSquare: FunctionComponent<ImagesProps> = props => {
    const classes = useStyles();

    const square= () => (Data.length > 0 ?          
            Data.map((promotion)=>
                <GridListTile key={promotion.urlImage}  style={ {height: 'auto' }}>
                  <Img className={classes.img} src={process.env.PUBLIC_URL + promotion.urlImage}/>                            
                  <a href={promotion.link}><GridListTileBar 
                        title = {promotion.title} 
                        subtitle = {promotion.description}
                        /></a>
                </GridListTile>
          ) : null   
      )
    return <GridList cellHeight={180} className={classes.gridList} style={ {margin: '' }}>
                {square()}
          </GridList>;
         
}

export default PaintingSquare;