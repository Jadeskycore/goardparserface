import React from 'react';

export class WebmTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {webmShow: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({webmShow: !this.state.webmShow});
    }
    render() {
        let webm = null;

        if (this.state.webmShow) {
            webm = <Webm webmObj={this.props.webmObj}/>
        } else {
            webm = null
        }
        return (
            <div>
                <img
                    onClick={this.handleChange}
                    src={this.props.webmObj.thumbnail} alt="stuff"
                />
                {webm}
            </div>
        )
    }
}

class Webm extends React.Component {
    render() {
        return(
            <div>
                <video
                    controls="controls"
                    width="50%"
                    height="50%"
                    loop="loop"
                    autoPlay
                >
                    <source
                        type="video/webm"
                        src={this.props.webmObj.path}
                    >

                    </source>
                </video>
            </div>
        )
    }
}