import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent implements OnInit {
  public imgName: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  public searchImg() {
    if(this.imgName === '') {
      return;
    }

  }
}
