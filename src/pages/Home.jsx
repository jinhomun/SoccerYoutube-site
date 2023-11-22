import React, { useEffect, useState } from 'react'

import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider';
import { fetchFromAPI } from '../utils/api';

const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);


    useEffect(() => {
        const v1 = "UCn9mJ4htO64-1osMWYu9k5Q";
        const v2 = "UCRDowcnvz5ZVh-3NVAdfiqg";
        const v3 = "UChb4gtsgSdwMDktdLukfrfw";
        const v4 = "UCdTDdygpZKdDew2s1s419iw";
        const v5 = "UC7JbUmyD7g8JH6LvkkQuSZQ";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`)
                setChannelVideo(videosData.items);

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`)
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`)
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`)
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`)
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchResults();
    }, []);

    return (
        <Main
            title="축구 유튜버"
            description="축구 유튜버 모음 사이트에 오신걸 환영합니다."
        >
            <Today />
            <Youtuber />


            <VideoSlider videos={channelVideo} title='⚽이스타TV 최신 영상⚽' name='v1' />
            <VideoSlider videos={channelVideo2} title='⚽달수네라이브 최신 영상⚽' name='v2' />
            <VideoSlider videos={channelVideo3} title='⚽김진짜 RealKim 최신 영상⚽' name='v3' />
            <VideoSlider videos={channelVideo4} title='⚽슛포러브 최신 영상⚽' name='v4' />
            <VideoSlider videos={channelVideo5} title='⚽이거해조 원희형 최신 영상⚽' name='v5' />
        </Main>
    )
}

export default Home