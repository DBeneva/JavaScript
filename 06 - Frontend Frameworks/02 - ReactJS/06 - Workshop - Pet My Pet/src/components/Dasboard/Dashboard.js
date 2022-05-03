import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as petService from '../../services/petService';

import PetList from '../PetList/PetList';


const Dashboard = () => {
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
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <Routes>
                    <Route path="/" element={<PetList pets={pets} />} />
                </Routes>
            </section>

        </section>
    );
}

// export default isAuth(Dashboard);
// export const PrivateDashboard = isAuth(Dashboard);
export default Dashboard;

/* <li className="otherPet">
        <h3>Name: Buddy</h3>
        <p>Type: dog</p>
        <p className="img"><img src="/images/dog2.png" /></p>
        <a className="button" href="#">Details</a>
    </li>

    <li className="otherPet">
        <h3>Name: Tyson</h3>
        <p>Type: parrot</p>
        <p className="img"><img src="/images/parrot.png" /></p>
        <a className="button" href="#">Details</a>
    </li>

    <li className="otherPet">
        <h3>Name: Milo</h3>
        <p>Type: dog</p>
        <p className="img"><img src="/images/dog.png" /></p>
        <a className="button" href="#">Details</a>
    </li>

    <li className="otherPet">
        <h3>Name: Tom</h3>
        <p>Type: cat</p>
        <p className="img"><img src="/images/cat1.png" /></p>
        <a className="button" href="#">Details</a>
    </li> */