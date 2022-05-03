import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import ConfirmDialog from '../common/ConfirmDialog/ConfirmDialog';
import usePetState from '../../hooks/usePetState';

import './Details.css';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);

    useEffect(() => {
        likeService.getPetLikes(petId)
            .then((likes) => {
                setPet(state => ({ ...state, likes }));
            });
    }, []);

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
        if (user._id == pet._ownerId) {
            return;
        }

        if (pet.likes?.includes(user._id)) {
            addNotification('You have already liked this pet!', types.warn);
            return;
        }

        likeService.like(user._id, petId)
            .then(() => {
                setPet(state => ({ ...state, likes: [...state.likes, user._id] }));
                addNotification('Successfully liked this pet!', types.warn);
            });
    };

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <button className="button" to="#" onClick={deleteClickHandler}>Delete</button>
        </>
    );

    const userButtons = (
        <button className="button" onClick={likeBtnClick} disabled={pet.likes?.includes(user._id)}>Like</button>
    );

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
                            <span id="total-likes">Likes: {pet.likes?.length || 0}</span>
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