import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationDate } from '../model/reservation-date';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationDateService {

  constructor(private httpClient: HttpClient) { }

  private apiServiceUrl = environment.baseUrl

  arriveDate : string
  departDate : string

  setArriveDate(checkin : string){
    this.arriveDate = checkin
  }

  getArriveDate(){
    return this.arriveDate
  }

  setDepartDate(checkout : string){
    this.departDate = checkout
  }

  getDepartDate(){
    return this.departDate
  }


  // public filterAvailableDate(filterAvailableDateForm: FormData) {
   
  //   return this.httpClient.get<ReservationDate>(`${this.apiServiceUrl}/api/v1/bookings`, filterAvailableDateForm);
  // }

}
