import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtheatre',
  templateUrl: './addtheatre.component.html',
  styleUrls: ['./addtheatre.component.css']
})
export class AddtheatreComponent implements OnInit {

  cities: string[] = [
    'Ahmadnagar', 'Akola', 'Amravati', 'Aurangabad', 'Buldana', ' Chandrapur', 'Dhule', 'Gadchiroli',
    'Jalgaon', 'Jalna', 'Kalyan', 'Karjat', 'Kolhapur', 'Latur', ' Malegaon', 'Mumbai', 'Nagpur', 'Nanded', 
    'Nashik', 'Navi Mumbai', ' Pandharpur', 'Panvel', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Shirdi',
    'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
