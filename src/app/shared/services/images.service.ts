import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private error$ = new Subject<string>();

  constructor() { }

  public setError(mensaje: string) {
    this.error$.next(mensaje);
  }
  public getError(): Observable<string> {
    return this.error$.asObservable();
  }
}
