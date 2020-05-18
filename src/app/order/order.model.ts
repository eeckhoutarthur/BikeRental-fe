import { Bike } from "../bike/bike.model";

interface OrderJson{
    orderId:number,
    startDate:Date,
    endDate:Date,
    bike: Bike,
    customerEmail: string
}

export class Order{
    private _orderId:number;
    constructor(
        private _startDate:Date,
        private _endDate:Date,
        private _bike: Bike,
        private _customerEmail: string
    ){}

    static fromJSON(json: OrderJson): Order{
        const o = new Order(json.startDate,json.endDate,json.bike,json.customerEmail);
            o._orderId = json.orderId;
            return o;
    }

    toJSON(): OrderJson{
        return <OrderJson>{
            startDate: this.startDate,
            endDate: this.endDate,
            bike: this.bike,
            customerEmail: this.customerEmail
        }
    }

    get orderId(): number{
        return this._orderId;
    }
    get startDate(): Date{
        return this._startDate;
    }
    get endDate(): Date{
        return this._endDate;
    }
    get bike(): Bike{
        return this._bike;
    }
    get customerEmail(): string{
        return this._customerEmail;
    }
}