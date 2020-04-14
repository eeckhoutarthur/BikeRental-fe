import {Bike} from './bike.model'

const JsonBikes = [
    {
        id: 1,
        name: "Tarmac",
        price: 5000,
        discBrakes: true,
        bikeBrand: "Sepcialized",
        bikeGroupset: "Shimano",
        bikeType: "Race Bike"
    },
    {
        id: 2,
        name: "Madone SLR 9 Disc eTap",
        price: 11000,
        discBrakes: true,
        bikeBrand: "Trek",
        bikeGroupset: "Sram",
        bikeType: "Race Bike"
    }
];

export const bikeData: Bike[] = JsonBikes.map(Bike.fromJSON);