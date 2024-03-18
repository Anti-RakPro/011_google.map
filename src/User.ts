import faker from "faker"

class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    location2: {
        lat: 15;
        lng: 16;
    };

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}

console.log(faker)
console.log(User.location)


