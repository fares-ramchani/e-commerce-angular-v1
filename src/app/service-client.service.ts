import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './Model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  constructor(private Http:HttpClient) { }
  public AddClient(Client:Client)
   {
    return this.Http.post<Client>("http://localhost:8081/Client/AddClient",Client)
   }
}
