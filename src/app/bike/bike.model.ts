// import { DecimalPipe } from '@angular/common';
import { Brand } from './brandE';
import { Groupset } from './groupsetE.enum';
import { Type } from './typeE.enum';
import {BikeJson} from './bikeJson'

export class Bike implements BikeJson{
    private _id: number;
    constructor(
        private _name: string,
        private _price: number,
        private _discBrakes: boolean,
        private _bikeBrand: Brand,
        private _bikeGroupset: Groupset,
        private _bikeType: Type
    ) {}

    static fromJSON(json: BikeJson): Bike{
        const b = new Bike(json.name,json.price,json.discBrakes,json.bikeBrand,
            json.bikeGroupset,json.bikeType);
            b._id = json.id;
            return b;
    }

    // static fromJSON2(bikeData: Bike) : Bike{
    //     const b = new Bike(bikeData.name,bikeData.price,bikeData.discBrakes,bikeData.bikeBrand,
    //         bikeData.bikeGroupset,bikeData.bikeType);
    //     return b;
    // }

    get id(): number{
        return this._id;
    }
    get name(): string{
        return this._name;
    }
    get price(): number{
        return this._price;
    }
    get discBrakes(): boolean{
        return this._discBrakes;
    }
    get bikeBrand(): Brand{
        return this._bikeBrand;
    }
    get bikeGroupset(): Groupset{
        return this._bikeGroupset;
    }
    get bikeType(): Type{
        return this._bikeType;
    }
}
