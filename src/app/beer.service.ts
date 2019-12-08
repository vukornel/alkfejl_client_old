import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beer } from './beer';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class BeerService {
 
  private beerUrl: string;
 
  constructor(private http: HttpClient) {
    this.beerUrl = 'http://localhost:8080/drink/beers';
  }
 
  public findAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beerUrl);
  }
 
  public save(beer: Beer) {
    return this.http.post<Beer>(this.beerUrl, beer);
  }
}