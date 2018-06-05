import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
data = {};
start = 0;
constructor(){

}
  nextPage() {
    this.start += 20;
    this.fetchData();
    console.log(this.start);
  }

  previousPage() {
    if(this.start > 20){
      this.start -= 20;
      this.fetchData();

    }
  }

  fetchData() {
    let apiUrl = `https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&rows=20&start=${this.start}&sort=code_postal&facet=tco_libelle&facet=code_postal`;
    console.log(apiUrl);
    axios.get('https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&sort=code_postal&facet=tco_libelle&facet=code_postal&rows=20')
      .then((response) => {
        this.data = response.data
      })
      .catch((error) => {
        console.error(error);
      });
    }

  ngOnInit() {
    this.fetchData();
  }

}
