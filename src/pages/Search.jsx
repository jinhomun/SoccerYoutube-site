import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true)
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items])
                console.log(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error fetching data", error);
                setLoading(false)
            })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="유튜버 검색 페이지"
            description="유튜버 검색 결과 페이지입니다."
        >
            <section id='searchPage' >
                <h2>⚽ <em>{searchId}</em> 검색 결과입니다.</h2>

                <div className={`video__inner ${searchPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>

                <div className="video__more">
                    <button onClick={handleLoadMore}>더 보기</button>
                </div>
            </section>
        </Main>
    )
}

export default Search