import { Injectable } from '@angular/core';
import { Drink } from "./drink";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, httpOptions } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  
  private drinkUrl: string;
 
  constructor(private http: HttpClient) {
    this.drinkUrl = 'http://localhost:8080/drink/wines';
  }
 
  public getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinkUrl);
  }
 
  public save(user: Drink) {
    return this.http.post<Drink>(this.drinkUrl, user);
  }

  public findAll(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinkUrl);
  }

  getDrink(id: number): Promise<Drink> {
    return this.http.get<Drink>(`${this.drinkUrl}/${id}`, httpOptions).toPromise();
  }

  createDrink(drink: Drink): Promise<Drink> {
    return this.http.post<Drink>(`${this.drinkUrl}`, drink, httpOptions).toPromise();
  }

  updateDrink(drink: Drink): Promise<Drink> {
    return this.http.put<Drink>(`${this.drinkUrl}/${drink.id}`, drink, httpOptions).toPromise();
  }

  deleteDrink(id): Promise<Drink> {
    return this.http.delete<Drink>(`${this.drinkUrl}/${id}`, httpOptions).toPromise();
  }
}