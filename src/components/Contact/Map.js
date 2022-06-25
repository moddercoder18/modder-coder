import GoogleMap, { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const MapMaker = ({
    google
}) => {
    const coordinate = { lat: 26.9124, lng: 75.7873 };
    return (
        <div style={{
            position: 'relative',
            height: "250px",
            margin:"0px",
            
        
        }}>
            <Map google={google} scrollwheel={true} zoom={10} center={coordinate} initialCenter={coordinate}>
                {/* <Marker
                    mapCenter={coordinate}
                    position={coordinate}
                /> */}
            </Map>
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBtwzdoQFpDDivpEvNM_9U4ZbL9jyFNi2g',
})(MapMaker)