import { useParams } from 'react-router-dom';

import * as petService from '../../services/petService';
import usePetState from '../../hooks/usePetState';

const types = [
    { value: 'cat', text: 'Cat' },
    { value: 'dog', text: 'Dog' },
    { value: 'parrot', text: 'Parrot' },
    { value: 'reptile', text: 'Reptile' },
    { value: 'other', text: 'Other' }
];

const Edit = () => {
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);

    const petEditSubmitHandler = (e) => {
        e.preventDefault();

        console.log('submit');
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={petEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={pet.name} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" value={pet.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type}>
                                <option defaultValue="Cat">Cat</option>
                                <option defaultValue="Dog">Dog</option>
                                <option defaultValue="Parrot">Parrot</option>
                                <option defaultValue="Reptile">Reptile</option>
                                <option defaultValue="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
};

export default Edit;