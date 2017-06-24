import React, { Component } from 'react';
import { ChanForm } from './components/ChanForm';
import { WebmTile } from './components/WebmTile';
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
                                <WebmTile
                                    key={inx}
                                    webmObj={listValue}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;