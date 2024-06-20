import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  employees: any[] = [];
  constructor(public injection_table:SharedService){}
  calculerTempsDeTravail(heureDebut: string, heureFin: string): string {
    const debut = new Date(`2000-01-01T${heureDebut}`);
    const fin = new Date(`2000-01-01T${heureFin}`);
    const diff = (fin.getTime() - debut.getTime()) / 1000;
    const heures = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${heures}h ${minutes}min`;
  }
 

}
