import React from 'react';

export class WebmTile extends React.Component {
    render() {
        return (
            <div>
                <img src={'https://2ch.hk/' + this.props.webmObj.thumbnail} alt="stuff"/>
            </div>
        )
    }
}