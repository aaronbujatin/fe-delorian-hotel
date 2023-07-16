import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../model/guest';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private readonly apiServerUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  public saveGuest(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(`${this.apiServerUrl}/api/v1/guests`, guest);
  }

}
