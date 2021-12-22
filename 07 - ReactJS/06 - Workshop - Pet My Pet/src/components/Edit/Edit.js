import { useState } from 'react';
import { useParams } from 'react-router-dom';

import * as petService from '../../services/petService';
import usePetState from '../../hooks/usePetState';

import './Edit.css';

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

    const [errors, setErrors] = useState({ name: false });

    const petEditSubmitHandler = (e) => {
        e.preventDefault();

        console.log('submit', pet);
    };

    const nameChangeHandler = (e) => {
        const currentName = e.target.value;

        if (currentName.length < 3) {
            setErrors({ ...errors, name: 'Your name should be at least 3 characters long!' });
        } else if (currentName.length > 10) {
            setErrors({ ...errors, name: 'Your name should not be longer than 10 characters!' });
        } else {
            setErrors({ ...errors, name: false });
        }
    };

    const typeChangeHandler = (e) => setPet({...pet, type: e.target.value});

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={petEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{ borderColor: errors.name ? 'red' : 'inherit' }}>
                            <input type="text" name="name" id="name" defaultValue={pet.name} onChange={nameChangeHandler} />
                        </span>
                        {errors.name && <span className="errorMsg">{errors.name}</span>}
                        
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
                            <select id="type" name="type" value={pet.type} onChange={typeChangeHandler}>
                                {types.map(x => {
                                    return (<option key={x.value} value={x.value}>{x.text}</option>);
                                })}
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