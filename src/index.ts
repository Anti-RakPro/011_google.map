import {User} from './User'
import {Company} from "./Company";

const map = document.getElementById('map') as HTMLElement
const g1 = new google.maps.Map(map, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0,
    }
})
console.log(g1)