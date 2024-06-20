import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  employee = {
    nom: '',
    prenom: '',
    equipe: '',
    date_teletravail: '',
    heure_debut_teletravail: '',
    heure_fin_teletravail: '',
    tempstravail: '',
    lieu_de_travail:''
  }
  

  ajout() {
    this.injection_table.employees.push(this.employee);
    this.employee = {
      nom: '',
      prenom: '',
      equipe: '',
      date_teletravail: '',
      heure_debut_teletravail: '',
      heure_fin_teletravail: '',
      tempstravail: '',
      lieu_de_travail:''
    }
    
  }
  constructor(public injection_table:SharedService){}


}
