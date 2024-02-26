import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'http://localhost:8080/automail/sendMultipleMessages/';

  constructor(private http: HttpClient) { }

  sendMultipleEmails(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
