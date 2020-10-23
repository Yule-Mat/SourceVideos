import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defatultSearchTerm) => {
    const [videos, setvideos] = useState([null]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearcherm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setvideos(response.data.items);

    };

    return [videos, search];

};

export default useVideos;