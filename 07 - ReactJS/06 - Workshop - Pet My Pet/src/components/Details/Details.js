import * as petService from '../../services/petService';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Details = () => {
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        petService.getById(petId)
            .then(pet => {
                setPet(pet);
            });
    }, [petId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        petService.remove(pet._id, user.accessToken)
            .then(() => navigate('/dashboard'));
    };

    const ownerButtons = (
        <>
            <Link className="button" to="/edit">Edit</Link>
            <Link className="button" href="#" onClick={deleteHandler}>Delete</Link>
        </>
    );

    const userButtons = <a className="button" href="#">Like</a>;

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id && (pet._ownerId === user._id
                        ? ownerButtons
                        : userButtons
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes ? pet.likes.length : 0}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;