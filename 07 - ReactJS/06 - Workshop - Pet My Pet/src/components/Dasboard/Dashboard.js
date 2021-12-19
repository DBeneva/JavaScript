import { Routes, Route, Link } from 'react-router-dom';
import PetList from '../PetList/PetList';

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<><p> Types... </p></>} />
                </Routes>
            </section>

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