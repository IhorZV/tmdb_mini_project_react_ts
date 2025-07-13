import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import ReactPlayer from "react-player";


import {IVideoResponse} from "../../interfaces";
import {movieService} from "../../services";
import css from "./YouTube.module.css"

interface IProps extends PropsWithChildren {
    id: number;
}

const YouTubeVideo: FC<IProps> = ({id}) => {

    const [videos, setVideos] = useState<IVideoResponse>(null)

    useEffect(() => {
        movieService.getVideoById(id).then(({data}) => setVideos(data))
    }, [id]);
    const videoKey = videos?.results?.[0]?.key;

    return (
        <div className={css.videoWrapper}>
            {videoKey && (
                <ReactPlayer
                    src={`https://www.youtube.com/watch?v=${videoKey}`}
                    controls
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    );
};

export {YouTubeVideo};