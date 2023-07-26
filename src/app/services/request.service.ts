import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // api:string="e1a6cd23742e4b9cb1be0dffe686ab93";
  api:string="676f017549224f488970f1835f9db971";
  //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
  sortByPopularity:string="https://newsapi.org/v2/everything?q=apple&from=2023-07-24&to=2023-07-24&sortBy=popularity&apiKey=";
  categoryUrl:string="https://newsapi.org/v2/top-headlines?country=us&category="
  cat_:string="&apiKey="
  constructor(private _http:HttpClient) { }
  getPopularNews(){
    return this._http.get<any>(this.sortByPopularity+this.api)  
  }
  getNewsByCategory(category:string){
    return this._http.get<any>(this.categoryUrl+category+this.cat_+this.api);
  }
}
