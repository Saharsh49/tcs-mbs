import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nums = [1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15]
  gridColumns = 3;
  pageSlice = this.nums.slice(0, 6)

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.nums.length){
      endIndex = this.nums.length;
    }
    this.pageSlice = this.nums.slice(startIndex, endIndex)
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
