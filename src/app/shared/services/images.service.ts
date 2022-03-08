import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private error$ = new Subject<string>();
  private search$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  public setError(mensaje: string) {
    this.error$.next(mensaje);
  }

  public getError(): Observable<string> {
    return this.error$.asObservable();
  }

  public sendSearch(search: string) {
    this.search$.next(search);
  }
  public getSearch(): Observable<string> {
    return this.search$.asObservable();
  }

  public getImg(
    search: string,
    imgPerPage: number,
    currentPage: number
  ): Observable<any> {
    const KEY = '26039699-3214e789a77d9e3e39e6d3c01';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${search}&per_page=${imgPerPage}&page=${currentPage} `;
    return this.http.get(URL);
  }
}
