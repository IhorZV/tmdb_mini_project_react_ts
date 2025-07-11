import {FC} from "react";
import ReactStars from "react-rating-stars-component";


interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({ vote_average }) => {
    return (
        <ReactStars
            count={5}
            value={vote_average / 2}
            size={24}
            activeColor="#ffd700"
        />

    );
};

export { StarsRating };

