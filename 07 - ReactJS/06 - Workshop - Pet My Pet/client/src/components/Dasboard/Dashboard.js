import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';
import PetCard from "./PetCrad/PetCard";

const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll().then(pets => setPets(Object.values(pets)));
        console.log(pets);
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                {pets.length > 0
                    ? pets.map(p => <PetCard pet={p} />)
                    : <p className="no-pets">No pets in database!</p>
                }
            </ul>
        </section>
    );
}

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