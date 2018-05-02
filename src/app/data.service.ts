import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  id: any;
  
  constructor(private _http: Http) { }

  getPrices(){
    return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
    .map(result => this.result = result.json());
  }
  
  getSpecificPrices(id){
    return this._http.get('https://api.coinmarketcap.com/v1/ticker/'+id+'/')
    .map(result => this.result = result.json());
  }

}
