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
    const [country, setCountry] = useState('ar')

    useEffect(() => {

        const getNews = async () => {
            const config = {headers:{"Authorization": '2f6d0340558d492f822e7c63497ed5ae'}}
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`,config);
            setArticles(response.data.articles);
        }

        getNews();
    }, [category, country])




    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    }
    const handleChange2 = (event) => {
        const { value } = event.target;
        setCountry(value);
    }




    return (
        <div >
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

            <div className="col-6" >
                <div className="d-flex flex-column py-2" >
                    <Form >
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" onChange={handleChange2} custom>
                                <option value="ar">Argentina</option>
                                <option value="us">Estados Unidos</option>
                                <option value="jp">Japón</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </div>



            <CardColumns>
                {articles.map((art) => (
                    <Card  key={art.url}>
                        <Card.Img variant="top" src={art.urlToImage}  />
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
