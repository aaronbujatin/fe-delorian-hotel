import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestDetailsService {


  constructor() { }

  private dateDepart: string;
  private dateArrive: string;

  getDateArrive(): string {
    return this.dateArrive;
  }

  setDateArrive(dateArrive: string): void {
    this.dateArrive = dateArrive;
  }



  getDateDepart(): string {
    return this.dateDepart;
  }

  setDateDepart(dateDepart: string): void {
    this.dateDepart = dateDepart;
  }


  private totalPrice : number

  getTotalPrice() : number{
    return this.totalPrice;
  }

  setTotalPrice(totalPrice : number) : void{
    this.totalPrice = totalPrice;
  }


  private numberOfNights : number

  getNumberOfNights() : number{
    return this.numberOfNights;
  }

  setNumberOfNights(numberOfNights : number) {
    this.numberOfNights = numberOfNights;
  } 

  private totalPayment : number

  getTotalPayment() : number {
    return this.totalPayment;
  }

  setTotalPayment(totalPayment : number) {
    this.totalPayment = totalPayment;
  }
}
