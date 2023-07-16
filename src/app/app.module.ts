import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayerComponent } from './layer/layer.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterRoomComponent } from './filter-room/filter-room.component';
import { HeadertwoComponent } from './component/headertwo/headertwo.component';
import { NgToastModule } from 'ng-angular-popup';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { DatepickerModule } from 'ng2-datepicker';
import { Locale } from 'date-fns';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { MyhomeComponent } from './component/myhome/myhome.component';
import { AdminContentComponent } from './component/admin-content/admin-content.component';
import { UserContentComponent } from './component/user-content/user-content.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayerComponent,
    SelectRoomComponent,
    CheckoutComponent,
    FooterComponent,
    HomeComponent,
    FilterRoomComponent,
    HeadertwoComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    MyhomeComponent,
    AdminContentComponent,
    UserContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule,
    CreditCardDirectivesModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
