import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlBook = 'http://localhost:3000/book'
  constructor(private http: HttpClient) { }
  getBook(): Observable<any> {
    return this.http.get<any>(this.urlBook);
  }
}
