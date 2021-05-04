import Carousel from 'react-bootstrap/Carousel';
import './home.css';


export default function Home() {

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://www.infobae.com/new-resizer/k3MJOgtb3Ko_PT5Gklqo_mEC_ZI=/768x341/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ESP5AYAX6VFOTE35FB6X6HGENY.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="texto-carrousel">
                        <h3>Cómo liberar espacio en tu cuenta de Google</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://www.infobae.com/new-resizer/0-KvdN-LA9By8c612_6ZWbmvus4=/420x236/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5NF7KPKF5JHWTI7KUC3VPDX5E4.jpg"

                        alt="Second slide"
                    />
                    <Carousel.Caption className="texto-carrousel" >
                        <h3>WhatsApp desarrolla una herramienta para importar chats de iOS en Android</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://www.infobae.com/new-resizer/82qjIUKzWTwiZ-m6wPYqGjWn0Vk=/420x236/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JCE3Y5QSXJEXTP5NLSEHYDCAAE.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="texto-carrousel" >
                        <h3>Google Fotos pone fin al almacenamiento gratuito: qué deberán hacer los usuarios</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}