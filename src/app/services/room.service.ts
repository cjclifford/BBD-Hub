import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private _url = 'http://localhost:4000/getRooms';

  constructor(private _http: HttpClient) {}

  getAllRequests() {
    return this._http.get(this._url)
      .pipe(catchError(this.errorHandler));
  }

  // add request

  // delete request

  // get request by id

  errorHandler(error) {
    return throwError(error);
  }
}
