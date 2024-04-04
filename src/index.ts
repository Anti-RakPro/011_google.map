

import {User} from './User'
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company)


// const map = document.getElementById('map') as HTMLElement
// const g1 = new google.maps.Map(map, {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0,
//     }
// })
// console.log(g1)