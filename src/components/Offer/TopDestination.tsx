import { FunctionComponent } from "react";
import {  AccommodationProps } from "./Offer";

export interface TopDestination{
    accommodations: Array<AccommodationProps>;
    loading: string;
}


const TopDestination: FunctionComponent<TopDestination> = props => {
    return null;
}

export default TopDestination;