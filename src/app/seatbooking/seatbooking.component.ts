import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Theatre {
  name: string;
}

interface Seats{
  value: string;
}

interface Timings{
  value: string;
}

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrls: ['./seatbooking.component.css']
})
export class SeatbookingComponent implements OnInit {

  selectTheatre = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  theatres: Theatre[] = [
    {name: 'T1'},
    {name: 'T2'},
    {name: 'T3'},
    {name: 'T4'},
  ];

  numberOfSeats = new FormControl('', Validators.required);
  seats: Seats[] = [ {value: '1'}, {value: '2'}, {value: '3'}, {value: '4'}, {value: '5'}, {value: '6'},
  {value: '7'}, {value: '8'}, {value: '9'}, {value: '10'}];

  showTimes = new FormControl('', Validators.required);
  timings: Timings[] = [{value: '8:00 AM'}, {value: '12:30 PM'}, {value: '4:00 PM'}, {value: '7:30 PM'}, 
                         {value: '11:00 PM'}];

  constructor() { }

  ngOnInit(): void {

  
  }

}
