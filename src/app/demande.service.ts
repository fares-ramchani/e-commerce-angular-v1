import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from './Model/cart.model';
import { Demande } from './Model/demande.model';
import { DemandeDetails } from './Model/DemandeDetails.mode';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private Http:HttpClient) { }
  public AddDemande(cart:Array<cart>)
  {
    return this.Http.post<any>("http://localhost:8081/Demande/AddDemande",cart)
  }
  public GetDemande()
  {
    return this.Http.get<Array<Demande>>("http://localhost:8081/Demande/GetDemande")
  }
  public GetDemandeDetails()
  {
    return this.Http.get<Array<DemandeDetails>>("http://localhost:8081/DemandeDetails/GetDemandeDetails")
  }
  public AccepterDemande(id: Number) {
    return this.Http.put<any>(`http://localhost:8081/Demande/AcceptDemande?id=${id}`, {});
  }
  public RefusDemande(id: Number) {
    return this.Http.put<any>(`http://localhost:8081/Demande/RefusDemande?id=${id}`, {});
  }  
}
