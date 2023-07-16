import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USER_API_AUTH = "http://localhost:8080/api/v1/auth";


  constructor(private httpClient : HttpClient) { }


  public registerUser(user : User) : Observable<User>{
    return this.httpClient.post<User>(`${this.USER_API_AUTH}/signup`, user);
  }

  public loginUser(user : User) : Observable<User>{
    return this.httpClient.post<User>(`${this.USER_API_AUTH}/signin`, user);
  }

}
