import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { AddtheatreComponent } from './addtheatre/addtheatre.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingCompleteComponent } from './booking-complete/booking-complete.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'addmovies', component: AddmoviesComponent },
  { path:'addtheatre', component: AddtheatreComponent },
  { path:'movie-detail', component: MovieDetailComponent },
  { path:'book-seats', component: SeatbookingComponent },
  { path:'payment', component: PaymentComponent },
  { path:'complete', component: BookingCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
