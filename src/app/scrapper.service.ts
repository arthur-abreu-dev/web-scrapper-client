import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  constructor(private http: HttpClient) { }

  public obterPaginaHtml(url: string): Observable<any> {
    console.log('http://localhost:3000/scrapper/getPage/' + btoa(url));
    return this.http.get('http://localhost:3000/scrapper/getPage/' + btoa(url));
  }
}
