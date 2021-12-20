import { useState, useEffect } from 'react';

import * as petService from '../services/petService';

const usePetState = (petId) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        petService.getById(petId)
            .then(pet => setPet(pet));
    }, []);

    return [
        pet,
        setPet
    ];
};

export default usePetState;