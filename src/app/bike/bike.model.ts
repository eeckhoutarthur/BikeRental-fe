import { DecimalPipe } from '@angular/common';
import { Brand } from './brand';
import { Groupset } from './groupset.enum';
import { Type } from './type.enum';

interface BikeJson{
    id: number
    name: string
    price: DecimalPipe
    discBrakes: boolean
    bikeBrand:number
    bikeGroupset: number
    bikeType: number
}

export class Bike{
    private _id: number;
    constructor(
        private _name: string,
        private _price: DecimalPipe,
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

    get id(): number{
        return this._id;
    }
    get name(): string{
        return this._name;
    }
    get price(): DecimalPipe{
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
