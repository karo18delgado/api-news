import axios from "axios"
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './cards.css';
import { CardColumns } from "react-bootstrap";


export default function Noticias() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('business');


    useEffect(() => {
        getNews();
    }, [category])

    const getNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=2f6d0340558d492f822e7c63497ed5ae&category=${category}`);
        setArticles(response.data.articles);
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    }


    return (
        <div>
            <div className="col-6" >
                <div className="d-flex flex-column py-2" >
                    <Form >
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label className="font-weight-bold"><h5>Buscar por Categorías</h5> </Form.Label>
                            <Form.Control as="select" onChange={handleChange} custom>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimientos</option>
                                <option value="general">General</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </div>

            <CardColumns>
                {articles.map((art) => (
                        <Card >
                            <Card.Img className="imagen-card" variant="top" src={art.urlToImage} />
                            <Card.Body>
                                <Card.Title>{art.title}</Card.Title>
                                <Card.Text>{art.description}</Card.Text>
                                <Card.Text><cite title="Source Title">{art.author}</cite></Card.Text>
                                <Button href={art.url} variant="primary">Ver Mas!</Button>
                            </Card.Body>
                        </Card>
                ))}
                </CardColumns>
            

        </div>
    )
}
