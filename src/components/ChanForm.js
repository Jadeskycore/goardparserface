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
            .then(response => response.json())
            .then(data => this.props.handler(data))
            .catch(error => console.log(error));
        }
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
                        style={{
                            width: '400',
                            height: '20',
                            fontSize: '20',
                            marginLeft: '20',
                            padding: '10',
                            border: 'solid 1px #707070',
                            borderBottom: 'solid 2px #c9c9c9',
                            transition: 'box-shadow 0.3s, border 0.3s',
                            boxShadow: '0 0 5px 1px #969696',
                        }}
                    />

                </label>
                <input
                    type="submit"
                    value="Submit"
                    style={{
                        background: '#333333',
                        color: 'white',
                        borderStyle: 'outset',
                        borderColor: '#54989F',
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