import { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { name: 'Ivo', age: 30 };
        this.onClick = () => this.setState({
            age: this.state.age + 1
        }); 
    }

    render() {
        return (
            <>
                <h3>{this.state.age}</h3>
                <button onClick={this.onClick}>+</button>
            </>
        );
    }
}

export default ClassComponent;