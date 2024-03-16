import faker from "faker"

class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {

    }
}
console.log(faker)
console.log('after faker')

