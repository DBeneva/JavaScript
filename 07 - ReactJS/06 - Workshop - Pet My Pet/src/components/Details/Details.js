import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';
import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog';
import usePetState from '../../hooks/usePetState';

const Details = () => {
    const { user } = useAuthContext();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const navigate = useNavigate();

    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);

    const deleteHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);

        petService.remove(pet._id, user.accessToken)
            .then(() => navigate('/dashboard'))
            .finally(() => setShowDeleteDialog(false));
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true);
    };

    const likeBtnClick = () => {
        if (pet.likes?.includes(user._id)) {
            // TODO: add notification

            console.log('User already liked this pet!');
            return;
        }
        
        const likedPet = { ...pet, likes: pet.likes ? [...pet.likes, user._id] : [user._id] };

        petService.like(likedPet, user.accessToken)
            .then((resData) => {
                console.log(resData);
                setPet(likedPet);
            });

        console.log(`Liked: ${pet.likes}`);
    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <button className="button" to="#" onClick={deleteClickHandler}>Delete</button>
        </>
    );

    const userButtons = <button className="button" onClick={likeBtnClick}>Like</button>;

    return (
        <>
            <ConfirmDialog
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onSave={deleteHandler}
                name={pet.name}
            />
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
        </>
    );
}

export default Details;