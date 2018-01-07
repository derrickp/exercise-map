
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiZHBsb3Rza3kiLCJhIjoiY2pjNDIzbHR3MTM1eTMwbnIwbzkzanV1NCJ9.zyryj72jwNEV2xFmH1shGQ";

const map = new mapboxgl.Map({
    container: 'exercise-map',
    style: 'mapbox://styles/mapbox/streets-v9'
});