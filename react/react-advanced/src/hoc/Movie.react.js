import React, { Component } from 'react';
import withTooltip from './withTooltip.react';

class Movie extends Component {
    render() {
        return (
            <div>
                Movie Component
                {this.props.showTooltip && <div>Some tooltip</div>}
            </div>
        );
    }
}

export default withTooltip(Movie);
