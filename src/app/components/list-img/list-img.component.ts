import { ImagesService } from './../../shared/services/images.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-img',
  templateUrl: './list-img.component.html',
  styleUrls: ['./list-img.component.css'],
})
export class ListImgComponent implements OnInit, OnDestroy {
  /////////////
  // Atributes
  ////////////
  public search: string = '';
  public suscription: Subscription;
  public loading: Boolean = false;
  public listImg: any[] = [];
  public perPage: number = 10;
  public currentPage = 1;
  public calcAllPage = 0;

  constructor(private imgService: ImagesService) {
    this.suscription = this.imgService.getSearch().subscribe((data) => {
      this.search = data;
      this.loading = true;
      this.currentPage = 1;
      this.getSearchImg();
    });
  }

  ngOnInit(): void {}

  public getSearchImg() {
    this.imgService
      .getImg(this.search, this.perPage, this.currentPage)
      .subscribe(
        (data): void => {
          this.loading = false;
          if (data.hits.length == 0) {
            this.imgService.setError('No se encontro ningun resultado');
          }
          this.calcAllPage = Math.ceil(data.totalHits / this.perPage);

          this.listImg = data.hits;
        },
        (error) => {
          this.imgService.setError('Ocurrio un error');
        }
      );
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  public paginaAnterior() {
    this.currentPage--;
    this.loading = true;
    this.listImg = [];
    this.getSearchImg();
  }

  public paginaPosterior() {
    this.currentPage++;
    this.loading = true;
    this.listImg = [];
    this.getSearchImg();
  }

  public paginaAnteriorClass() {
    if (this.currentPage === 1) {
      return false;
    } else {
      return true;
    }
  }

  public paginaPosteriorClass() {
    if (this.currentPage === this.calcAllPage) {
      return false;
    } else {
      return true;
    }
  }
}
