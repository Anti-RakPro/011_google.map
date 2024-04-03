export class CustomMap {
    private googleMap: google.maps.Map;
    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('map'))
    }
}