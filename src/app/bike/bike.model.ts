import {BikeJson} from './bikeJson'

export class Bike implements BikeJson{
    private _id: number;
    constructor(
        private _name: string,
        private _price: number,
        private _discBrakes: boolean,
        private _bikeBrand: string,
        private _bikeGroupset: string,
        private _bikeType: string
    ) {}

    static fromJSON(json: BikeJson): Bike{
        const b = new Bike(json.name,json.price,json.discBrakes,json.bikeBrand,
            json.bikeGroupset,json.bikeType.replace("_"," "));
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
    get bikeBrand(): string{
        return this._bikeBrand;
    }
    get bikeGroupset(): string{
        return this._bikeGroupset;
    }
    get bikeType(): string{
        return this._bikeType;
    }
}
