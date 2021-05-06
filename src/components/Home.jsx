import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import axios from "axios"


export default function Home() {
    const [articles1, setArticles] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&domains=techcrunch.com&sortBy=popularity&apiKey=2f6d0340558d492f822e7c63497ed5ae`);
        setArticles(response.data.articles);
    }
    const sliceArticles1 = articles1.slice(0, 3);

    return (
        <div >
            <Carousel fade>
            {sliceArticles1.map((art) => (
                
                    <Carousel.Item key={art.url}>
                        <img
                            className="d-block w-100 foto"
                            src={art.urlToImage} 
                            alt="First slide"
                        />
                        <Carousel.Caption className="texto-carrousel">
                            <h3>{art.title}</h3>
                            <p>{art.author}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}