import { Component, OnInit } from '@angular/core';
import { Demande } from '../Model/demande.model';
import { DemandeDetails } from '../Model/DemandeDetails.mode';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent implements OnInit {
  Demande: Array<Demande> = []
  DemandeDetails: Array<DemandeDetails> = []
  page: number = 1
  count: number = 0
  cardSize: number = 4
  constructor(private DemandeService: DemandeService) {

  }
  ngOnInit() {
    this.getDemande()
    this.getDemandeDetails()
  }
  getDemande() {
    this.DemandeService.GetDemande().subscribe({ next: data => { this.Demande = data } })
  }
  getDemandeDetails() {
    this.DemandeService.GetDemandeDetails().subscribe({ next: data => { this.DemandeDetails = data } })
  }
  trouve(id: any): any | any {
    let j = 0
    let L: Array<DemandeDetails> = []

    for (let i = 0; i < this.DemandeDetails.length; i++) {
      if (this.DemandeDetails[i].demande.id == id) {
        L[j] = this.DemandeDetails[i]
        j++
      }
    }
    return L
  }
  onCardDataChange(event: any) {
    this.page = event;
    this.getDemande();
    this.getDemandeDetails();
  }
  AccepterDemande(id: number) {
    this.DemandeService.AccepterDemande(id).subscribe({
      next: data => {
        this.getDemande();
        this.getDemandeDetails()
      }
    })
  }
  RefusDemande(id: number) {
    this.DemandeService.RefusDemande(id).subscribe({
      next: data => {
        this.getDemande();
        this.getDemandeDetails()
      }
    })
  }
}
