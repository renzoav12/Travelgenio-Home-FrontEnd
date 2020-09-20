import { FunctionComponent } from "react";
import { DestinationProps, AccommodationProps } from "./Offer";


export interface CheapestDestination{
    accommodations: Array<AccommodationProps>;
    loading: string;
}

const CheapestDestination: FunctionComponent<CheapestDestination> = props => {
    return null;
}

export default CheapestDestination;
