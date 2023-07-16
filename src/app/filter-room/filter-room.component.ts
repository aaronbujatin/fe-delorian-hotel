import { Component } from '@angular/core';
import { ReservationDate } from '../model/reservation-date';
import { NgForm } from '@angular/forms';
import { ReservationDateService } from './../service/reservation-date.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Room } from '../model/room';
import { GuestDetailsService } from '../service/guest-details.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-filter-room',
  templateUrl: './filter-room.component.html'
})
export class FilterRoomComponent {

  constructor(private reservationDateService: ReservationDateService,
    private httpClient: HttpClient,
    private guestDetailsService: GuestDetailsService
  ) { }

  availableDate: ReservationDate = new ReservationDate();
  rooms: Room[] = [];
  showSelectRoom : false
  isDateShow = false
  isLoading: boolean

  dateArrive: string
  dateDepart: string
  roomPrice: number
  selectPrice(dateArrive: string, dateDepart: string, roomPrice: number) {
    this.guestDetailsService.setDateArrive(dateArrive);
    this.guestDetailsService.setDateDepart(dateDepart);
    this.guestDetailsService.setNumberOfNights(this.getTheNumberOfNights(dateArrive, dateDepart))
    this.guestDetailsService.setTotalPayment(this.getTotalPayment(this.getTheNumberOfNights(dateArrive, dateDepart), roomPrice));
  }

  getTheNumberOfNights(arrive: string, depart: string): number {
    const checkin = new Date(arrive);
    const checkout = new Date(depart);
    const nightsDiff = checkout.getTime() - checkin.getTime();
    const numDays = Math.ceil(nightsDiff / 86400000)
    return numDays;
  }

  getTotalPayment(nightsDiff: number, totalPayment: number): number {

    const payment = nightsDiff * totalPayment

    return payment

  }

  onSubmit(filterAvailableDateForm: NgForm) {
    const params = new HttpParams()
      .set('checkinDate', this.availableDate.checkin)
      .set('checkoutDate', this.availableDate.checkOut);
    this.dateArrive = this.availableDate.checkin
    this.dateDepart = this.availableDate.checkOut
    console.log("From : " + this.dateArrive);
    console.log("To : " + this.dateDepart);

    this.isLoading = true
    this.httpClient.get('http://localhost:8080/api/v1/bookings/list', { params }).subscribe(
      (listrooms: any) => {
        this.isLoading = false
        this.isDateShow = true
        this.rooms = listrooms.map((rooms: any) => ({
          id: rooms.id,
          number: rooms.number,
          type: rooms.type,
          price: rooms.price,
          imageUrl: rooms.imageUrl,
          amenities: rooms.amenities,
          isAvailable: rooms.isAvailable
        }));
        if(this.rooms.length === 0){
            this.noRoomAlert()
        }
        console.log(this.rooms);

      },

      (error) => console.error(error)
    );
  }

  minCheckoutDate: string = new Date().toISOString().split('T')[0];
  today: string = new Date().toISOString().split('T')[0];
  onCheckinDateChange() {
    if (this.availableDate.checkin) {
      const minDate = new Date(this.availableDate.checkin);
      minDate.setDate(minDate.getDate() + 1);
      this.minCheckoutDate = minDate.toISOString().split('T')[0];
    }
  }


  noRoomAlert() {
    if (this.rooms.length === 0) {
      Swal.fire({
        text: "No available room for your specified date. Please reselect",
        icon: "error",
        confirmButtonText: "OK",
        showCloseButton: true,
        buttonsStyling: true,
        confirmButtonColor: '#9D9179',
      });
    }
  }



}
