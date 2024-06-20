import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [
    {
      username: 'Firas',
      mission: 'La modélisation de datamart',
      teleworkDays: ['2023-08-23', '2023-08-24']
    },
    {
      username: 'Firas',
      mission: 'L’analyse de données',
      teleworkDays: ['2023-09-10', '2023-09-11']
    }
  ];

  constructor() {}

  ngOnInit() {}



 
}
