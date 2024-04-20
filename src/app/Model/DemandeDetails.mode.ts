import { Demande } from "./demande.model"

export interface DemandeDetails
{
    id:number
    nameProduct:String
    prix:number
    quantite:number
    demande:Demande
}
