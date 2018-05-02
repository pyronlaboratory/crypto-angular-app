import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  display='none';
  objectKeys = Object.keys;
  cryptos: any;
  id: any;
  chart = [];



  constructor(private _data: DataService){}

  ngOnInit() {
    this._data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
  }

  onCloseHandled(){
  	this.display='none';
  	this._data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
    });

  }

  getSpecificCurrency(id){
  	this.display="block";
  	this.id = id;
  	this._data.getSpecificPrices(this.id)
    .subscribe(res => {
      this.cryptos = res;
      
      let percent_change_7d = res.map(res => res.percent_change_7d)

      let last_updated = res.map(res => res.last_updated)

      let dates = []
      last_updated.forEach((res) =>{
      	let jsdate = new Date(res * 1000) 
      	dates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
      })


      this.chart = new Chart('canvas', {
      	type: 'polarArea',
      	data: {
      		labels: dates,
      		datasets: [
      			{
      			 data: percent_change_7d,
      			 borderColor: '#759bd8',
      			 fill: false
      			}
      		]
      	},
      	options: {
      		legend: {
      			display: false
      		},
      		scales: {
      			xAxes: [{
      			display: true
      			}],
      			yAxes: [{
      			display: true
      			}]
      		}
      	}
      })

    });
  
  } 

}
