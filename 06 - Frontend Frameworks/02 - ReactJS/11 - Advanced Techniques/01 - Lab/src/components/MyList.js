import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { isAuth } from '../hoc/isAuth';

const MyList = ({
}) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(res => {
                setDogs(res.message);
                console.log(res);
            });
    }, []);

    return (
        <Carousel style={{ width: 600}}>
            {dogs.map(x => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={x}
                        alt="Dog"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default isAuth(MyList);