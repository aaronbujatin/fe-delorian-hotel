import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  public setRoles(role : []){
    sessionStorage.setItem('role', JSON.stringify(role));
  }

  public getRoles() :  []{
    return JSON.parse(sessionStorage.getItem('role')|| 'null' || '{}');
  }

  public setSession(jsessionid : string) {
    sessionStorage.setItem('JSESSIONID', jsessionid);
  }

  public getSession() : string { 
    return sessionStorage.getItem('JSESSIONID')|| 'null' || '{}';
  }

  public logout(){
    sessionStorage.clear();
  }

  public isLoggedIn()  {
    return this.getRoles() && this.getSession();
  }

}
