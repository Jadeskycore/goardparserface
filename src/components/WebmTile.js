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
        let thumbnail = null;

        if (this.state.webmShow) {
            webm = <Webm webmObj={ this.props.webmObj } handler={ this.handleChange }/>;
            thumbnail = null;
        } else {
            webm = null;
            thumbnail = <Thumbnail webmObj={ this.props.webmObj } handler={ this.handleChange }/>;
        }
        return (
            <div className="box">
                {thumbnail}
                {webm}
                <WebmButton
                    webmObj={ this.props.webmObj }
                    AssignForDownloading={ this.props.AssignForDownloading }
                />
            </div>
        )
    }
}

class Webm extends React.Component {
    render() {
        return(
            <div>
                <video
                    className="videoChan"
                    controls="controls"
                    loop="loop"
                    autoPlay
                    onClick={this.props.handler}
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

class Thumbnail extends React.Component {
    render() {
        return(
        <div>
            <img
                onClick={this.props.handler}
                src={this.props.webmObj.thumbnail}
                className="image"
                alt="webmImage"
            />
            <div className="middle">
                <div className="text">Play</div>
            </div>
        </div>
        )
    }
}

class WebmButton extends React.Component {
    render() {
        return (
            <button
                onClick={ this.props.AssignForDownloading.bind(this, this.props.webmObj) }
            >
                Click to download
            </button>

        )
    }
}