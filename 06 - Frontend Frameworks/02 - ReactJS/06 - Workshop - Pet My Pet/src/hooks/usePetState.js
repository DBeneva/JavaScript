import { useState, useEffect, useMemo } from 'react';

import * as petService from '../services/petService';

const usePetState = (petId) => {
    const [pet, setPet] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, []);

    useEffect(() => {
        petService.getById(petId, controller.signal)
            .then(pet => {
                console.log(pet);
                setPet(pet);
            });

        return () => {
            controller.abort();
        };
    }, [petId, controller]);

    return [
        pet,
        setPet
    ];
};

export default usePetState;