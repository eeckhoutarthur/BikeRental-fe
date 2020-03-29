import {Bike} from './bike.model'
import { Brand } from './brandE';
import { Groupset } from './groupsetE.enum';
import { Type } from './typeE.enum';

const JsonBikes = [
    {
        id: 1,
        name: "Tarmac",
        price: 5000,
        discBrakes: true,
        bikeBrand: 1,
        bikeGroupset: 1,
        bikeType: 1
    },
    {
        id: 2,
        name: "Madone SLR 9 Disc eTap",
        price: 11000,
        discBrakes: true,
        bikeBrand: 2,
        bikeGroupset: 2,
        bikeType: 1
    }
];

export const bikeData: Bike[] = JsonBikes.map(Bike.fromJSON);