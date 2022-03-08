import { ImagesService } from './../../services/images.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  ////////////////
  // Atributes
  ///////////////
  public text = '';
  public show = false;
  public suscription: Subscription;

  constructor(private imgService: ImagesService) {
    this.suscription = this.imgService.getError().subscribe((data) => {
      this.showError();
      this.text = data;
    });
  }

  ngOnInit(): void {}

  public showError() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
