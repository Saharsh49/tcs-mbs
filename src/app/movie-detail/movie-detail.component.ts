import { Component, OnInit,  ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;


  constructor() { }

  ngOnInit(): void {
  }

}
