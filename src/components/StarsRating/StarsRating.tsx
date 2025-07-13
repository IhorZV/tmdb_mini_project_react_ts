import { FC } from "react";
import Rating from "@mui/material/Rating";

interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({ vote_average }) => {
    return (
        <Rating
            name="read-only"
            value={vote_average / 2}
            precision={0.5}
            readOnly
        />
    );
};

export { StarsRating };
