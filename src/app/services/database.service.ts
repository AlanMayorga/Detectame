import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private server: string = "http://localhost/detectame/api/";
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; chartset=UTF-8'
  });

  constructor(private http: HttpClient) { }

  createData(body, file) {
    return this.http.post(this.server + file, JSON.stringify(body), {headers: this.headers});
  }

}
