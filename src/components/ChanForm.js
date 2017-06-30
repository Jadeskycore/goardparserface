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
        const componentCntx = this;
        if (this.state.value) {
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
                .then(handleErrors)
                .then(data => componentCntx.props.handler(data))
                .catch(error => componentCntx.props.errorHandler(error) && console.log(error.message));
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="formInput">
                    Thread URL:
                </label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    id="formInput"
                />
                <input
                    type="submit"
                    value="Send"
                    id="formButton"
                />
            </form>
        );
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}