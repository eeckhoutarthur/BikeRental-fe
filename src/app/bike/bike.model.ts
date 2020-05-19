// import {BikeJson} from './bikeJson'

interface BikeJson{
    id: number
    name: string
    bikeBrand:string
    bikeGroupset: string
    bikeType: string
    discBrakes: boolean
    price: number
}

export class Bike /*implements BikeJson*/{
    private _id: number;
    constructor(
        private _name: string,
        private _bikeBrand: string,
        private _bikeGroupset: string,
        private _bikeType: string,
        private _discBrakes: boolean,
        private _price: number
    ) {}

    static fromJSON(json: BikeJson): Bike{
        const b = new Bike(json.name,json.bikeBrand,json.bikeGroupset,json.bikeType == "E_Bike"? json.bikeType.replace("_","-") : json.bikeType.replace("_"," "),json.discBrakes,json.price);
            b._id = json.id;
            return b;
    }
    toJSON(): BikeJson{
        return <BikeJson>{
            id: this._id,
            name: this.name,
            price: this.price,
            discBrakes: this.discBrakes,
            bikeBrand: this.bikeBrand,
            bikeGroupset: this.bikeGroupset,
            bikeType: this.bikeType == "E-Bike"? this.bikeType.replace("-","_") : this.bikeType.replace(" ","_"),
        }
    }

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
