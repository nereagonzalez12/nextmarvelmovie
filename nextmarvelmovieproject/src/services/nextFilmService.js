import axios from "axios";
const NM_URL = `https://whenisthenextmcufilm.com/api`;

// Call to 
function getNextFilm() {
    return axios.get(NM_URL);
}