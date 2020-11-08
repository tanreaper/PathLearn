import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment'

// import { AuthComponent } from './auth.component';

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    API_URL = environment.API_URL;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    constructor(private http: HttpClient) {}

    // private static _handleError(err: HttpErrorResponse | any) {
    //     return Observable.throw(err.message || 'Error: Unable to complete request.');
    // }

    public signup(email: string, password: string) {
        return this.http.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGcLPvXcVjrqPb08OILx0WAY2Iodhid8Q',
            {
                email: email,
                password: password,
                returnSecureToken: true 
            }
        );
    }

    public sendUserData(body: any) {
        console.log(body)
        console.log('from auth service:');
        console.log(this.API_URL + '/api/userData')
        return this.http.post( this.API_URL + '/api/userData', body, this.httpOptions);
    }
     
}