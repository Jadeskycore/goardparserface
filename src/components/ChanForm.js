import React from 'react';

export class ChanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch('https://goardparser.herokuapp.com/parse_data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                thread_link: this.state.value,
            })
        })
        .then(response => response.json())
        .then(data => this.props.handler(data))
        .catch(error => console.log(error));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={{ width: '400', height: '20', fontSize: '20'}}
                    />

                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}