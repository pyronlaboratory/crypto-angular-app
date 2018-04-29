import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  
  constructor(private _http: Http) { }

  getPrices(){
    return this._http.get('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10')
    .map(result => this.result = result.json());
  }


}
