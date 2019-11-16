import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Device } from '../Models/device';
import { Observable, throwError, from } from 'rxjs'; ////Libreria de JS que se fundamenta en RX
import { retry, catchError } from 'rxjs/operators'; ////Libreria de JS que se fundamenta en RX

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseApi = 'http://localhost:5000/api/Device'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('Error calling the Api');
  }

  public getDevices(): Observable<any> {
    return this.http.get(this.baseApi).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  public deleteDevice(id: string): Observable<any> {
    return this.http.delete(
      `${this.baseApi}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }

  public createDevice(item: Device): Observable<any> {
    return this.http.post(
      `${this.baseApi}`,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
}
