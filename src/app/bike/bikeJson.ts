import { Brand } from './brandE';
import { Groupset } from './groupsetE.enum';
import { Type } from './typeE.enum';

export interface BikeJson{
    id: number
    name: string
    price: number
    discBrakes: boolean
    bikeBrand:Brand
    bikeGroupset: Groupset
    bikeType: Type
}