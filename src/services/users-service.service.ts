
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  constructor(private http: HttpClient) { }

  getData(page: number): Observable<any> {
    const apiUrl = `https://reqres.in/api/users?page=${page}`;
    return this.http.get<any>(apiUrl);
  }

  getUserDetails(userId: number): Observable<any> {
    const url = `https://reqres.in/api/users/${userId}`;
    return this.http.get<any>(url);
  }
}