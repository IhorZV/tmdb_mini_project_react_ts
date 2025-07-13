import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import ReactPlayer from 'react-player'

import {IVideoResponse} from "../../interfaces";
import {movieService} from "../../services";


interface IProps extends PropsWithChildren {
    id: number;
}

const YouTubeVideo: FC<IProps> = ({id}) => {

    const [videos, setVideos] = useState<IVideoResponse>(null)

    useEffect(() => {
        movieService.getVideoById(id).then(({data}) => setVideos(data))
    }, [id, videos]);
    return (
        <div>{videos &&
            <ReactPlayer
                src={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
                config={
                    {
                        youtube: {
                            color: 'white',
                        },
                    }
                }
                controls={false}
            />}
        </div>
    );
};

export {YouTubeVideo};