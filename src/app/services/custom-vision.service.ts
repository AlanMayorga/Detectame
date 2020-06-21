import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/CVAPI';

@Injectable({
  providedIn: 'root'
})
export class CustomVisionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  setImg(img) {
    let appData = new HttpHeaders()
    .set('Prediction-Key', APIURL.key)
    .set('Content-Type', APIURL.contenttype);
    //application/octet-stream <= Para archivos
    let json = {
      url: img
    }
    let body = JSON.stringify(json);
    //console.log("json: " + body);
    //console.log("Headers: " + appData);
    return this.httpClient.post(APIURL.url, body, {headers: appData});
  }

}
