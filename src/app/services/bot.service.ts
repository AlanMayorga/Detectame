import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BOTAPI } from '../../environments/BOTAPI';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(
    private http: HttpClient
  ) { }

    setQuestion(question: string){
      let headers = new HttpHeaders()
      .set('Authorization', BOTAPI.authorization)
      .set('Content-Type', BOTAPI.contentType);
      let json = {
        question: question
      }
      let data = JSON.stringify(json);
      return this.http.post(BOTAPI.host, data, {headers: headers});
    }

}
