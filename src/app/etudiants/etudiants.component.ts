import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-et',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;
  listEtudiants;
  currentFormation={ id:-1 };

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8088/formations")
      .subscribe(data =>{
        this.listFormations=data;
      },err=>{
        console.log(err);
      });
  }

  onGetEtudiants(f) {
    this.currentFormation=f;
    this.httpClient.get("http://localhost:8088/formations/"+f.id+"/etudiants")
      .subscribe(data =>{
        this.listEtudiants=data;
      },err=>{
        console.log(err);
      });
  }

}
