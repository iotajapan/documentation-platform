import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './mapMarker.css';

/**
 * Component to display an event map marker.
 */
class MapMarker extends Component {
    static propTypes = {
        children: PropTypes.any,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className="map-marker" {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export default MapMarker;
