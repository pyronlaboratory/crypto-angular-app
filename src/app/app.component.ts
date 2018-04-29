import { Component } from '@angular/core';

import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  display='none';
 
  objectKeys = Object.keys;
  cryptos: any;
  i: number;


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
  }

  openModal(i){
  	this.display="block";
  	this._data.getPrices()
  	 .subscribe(res => {
      this.cryptos = res;
      console.log(JSON.stringify(res));
	});
	this.i = i;
    console.log(i);
  }

 

}
