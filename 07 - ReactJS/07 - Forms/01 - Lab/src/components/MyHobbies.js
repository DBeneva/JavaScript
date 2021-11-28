import { Component } from 'react';
import './MyHobbies.css';

class MyHobbies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: [],
            selectedHobby: null
        };

        this.onHobbyClick = this.onHobbyClick.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(res => {
                console.log(Object.values(res));
                this.setState({
                    hobbies: Object.values(res)
                });
            });
    }

    onHobbyClick(e) {
        console.log(e.target);
        this.setState({
            selectedHobby: e.target.textContent
        });
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <ul>
                    {this.state.hobbies
                      .map(x =>
                        <li
                            key={x._id}
                            onClick={this.onHobbyClick}
                            className={x.name === this.state.selectedHobby ? 'selected' : ''}
                        >
                            {x.name}
                        </li>)}
                </ul>
            </>
        );
    }
}

export default MyHobbies;