import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as petService from '../../services/petService';
import { AuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/types')
            .then(res => res.json())
            .then(res => {
                const typesResult = Object.values(res);
                setTypes(typesResult);
            });
    }, []);

    const onPetCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        petService
            .create({ name, description, imageUrl, type }, user.accessToken)
            .then(() => navigate('/dashboard'));
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" action="" method="POST" onSubmit={onPetCreate}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                {/* {types.map(x => <option key={x._id} value={x.name}>{x.name}</option>)} */}
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;