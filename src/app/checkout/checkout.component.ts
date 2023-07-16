import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GuestService } from './../service/guest.service';
import { Guest } from '../model/guest';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { GuestDetailsService } from '../service/guest-details.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../service/room.service';
import { Room } from '../model/room';
import { BookingService } from '../service/booking.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  availableDate: any;

  dateArrive: string;
  dateDepart: any
  numberOfNights: number
  subscription: Subscription;
  totalPayment: number
  constructor(private guestService: GuestService,
    private guestDetailsService: GuestDetailsService,
    private route: ActivatedRoute,
    private myRoute: Router,
    private roomService: RoomService,
    private bookingService: BookingService,
    private toastr: NgToastService,) {
    this.dateArrive = this.guestDetailsService.getDateArrive();
    this.dateDepart = this.guestDetailsService.getDateDepart();
    this.numberOfNights = this.guestDetailsService.getNumberOfNights();
    this.totalPayment = this.guestDetailsService.getTotalPayment();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.getProductById(params['id']));
    console.log(this.totalPayment);
    // if (this.totalPayment === 0 || this.totalPayment === undefined) {
    //   // this.myRoute.navigateByUrl('')
    // }
  }

  room: Room;

  getProductById(id: number) {
    this.roomService.getRoomById(id).subscribe(
      (response: Room) => {
        this.room = response
        console.log(this.room);
      }
    )
  }




  today: string = new Date().toISOString().split('T')[0];
  guest: Guest = new Guest();

  onSubmit(guest: NgForm) {
    const roomId = this.room.id
    this.guest.payment = this.totalPayment
    this.guest.checkin = this.dateArrive
    this.guest.checkout = this.dateDepart
    this.bookingService.saveBooking(roomId, this.guest).subscribe(
      (response: Guest) => {
        guest.reset()
        this.guest = response
        Swal.fire({
          text: "Your reservation was successful. You will now redirect to our homepage",
          icon: "success",
          confirmButtonText: "OK",
          showCloseButton: true,
          confirmButtonColor: '#9D9179',
        }).then((result) => {
          if (result.isConfirmed) {
            this.myRoute.navigateByUrl('')
          }
        });
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  minCheckoutDate: string = new Date().toISOString().split('T')[0];

  onCheckinDateChange() {
    // Calculate the minimum checkout date based on the selected check-in date
    if (this.guest.checkin) {
      const minDate = new Date(this.guest.checkin);
      minDate.setDate(minDate.getDate() + 1);
      this.minCheckoutDate = minDate.toISOString().split('T')[0];
    }
  }



}


