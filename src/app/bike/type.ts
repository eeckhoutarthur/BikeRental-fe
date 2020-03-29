export class Type {
    constructor(private _types = ['RoadBike','E_Bike','MountainBike','UrbanBike']) {}

    public get types(){
        return this._types;
    }
}
