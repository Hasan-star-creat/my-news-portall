import React, { useEffect, useState } from 'react';
import Dettails from '../Dettails/Dettails';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-25&sortBy=publishedAt&apiKey=53353981e2e64a1ea281bf7401681edc';
         fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    }, []);
    // console.log(news);
               
    return (  
        <div>
               {
                   news.map(articl => <Dettails articles={articl} ></Dettails>)
               }
        </div>
    );
};

export default News;