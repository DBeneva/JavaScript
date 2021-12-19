import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';
import PetCard from './PetCard/PetCard';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(pets => {
                console.log(pets);
                setPets(pets);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }, []);

    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(p => <PetCard key={p._id} pet={p} />)}
                    </ul>
                )
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
};

export default PetList;