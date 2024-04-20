import { cart } from "./cart.model"

export interface Demande{
    id:number
    statue:any
    prixTotal:any
    client:String
    ListCart:Array<cart>
}