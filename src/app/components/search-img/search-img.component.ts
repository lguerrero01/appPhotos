import { ImagesService } from './../../shared/services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css'],
})
export class SearchImgComponent implements OnInit {
  public imgName: string = '';
  constructor(private imgService: ImagesService) {}

  ngOnInit(): void {}

  public searchImg() {
    if (this.imgName === '') {
      this.imgService.setError('Agrega un texto de busqueda');
      return;
    }
    this.imgService.sendSearch(this.imgName);
  }
}
