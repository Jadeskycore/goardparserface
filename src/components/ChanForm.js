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
        fetch(process.env.REACT_APP_API_URL, {
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
                    Thread URL:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={{ width: '400', height: '20', fontSize: '20'}}
                    />

                </label>
                <input
                    type="submit"
                    value="Submit"
                    style={{
                        background: '#222',
                        color: 'white',
                        borderStyle: 'outset',
                        borderColor: '#FBF5F5',
                        height: '40',
                        width: '100',
                        font: 'bold 15px arial sans-serif',
                        marginLeft: '40'
                    }}
                />
            </form>
        );
    }
}