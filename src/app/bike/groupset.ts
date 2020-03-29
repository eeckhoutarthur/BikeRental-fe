export class Groupset {
    constructor(private _groupsets = ['Shimano','Sram']) {}

    get groupsets(){
        return this._groupsets;
    }
}
