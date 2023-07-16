import { Injectable } from '@angular/core';
import { Guest } from '../model/guest';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient : HttpClient) { }

  
  private apiBookingUrl = environment.baseUrl;
  
  public saveBooking(id:number, guest : any) :Observable<any> {

    return this.httpClient.post<any>(`${this.apiBookingUrl}/api/v1/bookings/${id}`,guest);
    
  }


}
