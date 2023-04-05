import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 10
    };

    return (
        <section className="map">
            <div className="container">
                <div className="map__content">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A57430366a9c1caccdeff53e483a6a57da18da93c10c1aa2c756d3b8bf1811fe1&amp;source=constructor" width="100%" height="540" frameborder="0"></iframe>

                </div>
            </div>
        </section>
    );
};

export default Map;