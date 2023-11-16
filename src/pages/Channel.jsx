import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import { GrFormView } from "react-icons/gr";
import { MdAccessibility } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    // const [loading, setLoading] = useState(true)
    // const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                console.log(videosData)
                setChannelVideo(videosData.items);

            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        fetchResults();
    }, [channelId]);

    // 구독자수 ~~만명
    function formatSubscriberCount(subscriberCount) {
        // 만명으로 변환
        const formattedCount = (subscriberCount / 10000).toFixed(1);
        return `${formattedCount}만명`;
    }

    return (
        <section id='channelPage'>
            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span><MdAccessibility />{formatSubscriberCount(channelDetail.statistics.subscriberCount)}</span>
                            <span><BiSolidVideos />{channelDetail.statistics.videoCount}</span>
                            <span><GrFormView />{channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                    <div className='channel__video video__inner'>
                        <VideoSearch videos={channelVideo} layout="channel" />
                    </div>
                    <div className='channel__more'></div>
                </div>
            )
            }

        </section >
    )
}

export default Channel