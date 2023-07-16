import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectRoomComponent } from './select-room/select-room.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterRoomComponent } from './filter-room/filter-room.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { MyhomeComponent } from './component/myhome/myhome.component';

const routes: Routes = [
  { path: 'rooms', component: SelectRoomComponent },
  { path: '', component: HomeComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'bookings', component: FilterRoomComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'myhome', component: MyhomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
