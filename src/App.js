import React, { Component } from 'react';
import { ChanForm } from './components/ChanForm';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            webms: []
        };

        this.handler = this.handler.bind(this)
    }
    handler(data) {
        this.setState({
            webms: data.files
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Board Parser pre-alpha</h2>
                    <div>
                        <ChanForm handler={ this.handler }/>
                    </div>
                </div>
                <div>
                    {
                        this.state.webms.map((listValue, inx) => {
                            return (
                                <div key={inx}><img src={'https://2ch.hk/' + listValue.thumbnail} alt="stuff"/></div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;