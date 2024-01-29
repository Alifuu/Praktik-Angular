import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private jumlahData: Observable <number>;
  constructor() { 
    this.jumlahData = new Observable <number> (observer => {
      setInterval(() => {
      const randomValue = Math.random();
      observer.next(randomValue);
      }, 1000);
    });
  }
      getData(): Observable<number> {
        return this.jumlahData;
      }
  }

