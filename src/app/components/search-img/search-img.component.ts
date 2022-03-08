import { ImagesService } from './../../shared/services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css'],
})
export class SearchImgComponent implements OnInit {
  public imgName: string = '';
  constructor(private ImgService: ImagesService) {}

  ngOnInit(): void {}
  public searchImg() {
    if (this.imgName === '') {
      this.ImgService.setError('Agrega un texto de busqueda');
    }
    console.log(this.imgName);
  }
}
