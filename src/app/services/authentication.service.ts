import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
    // url = 'http://localhost:8080/auth/login';
    url = 'https://arg-prog-portfolio-backend.herokuapp.com/auth/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    // Behaviour Subjects has to be initializated, because always returns the last value
    // Stores the state
    // console.log('Authentication service is running');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  initSession(credentials: any): any {
    // Pipes chain operators
    // Storage is an object, an space in local memory
    // Stores data in the browser, there's no need to fetch data from the server every time

    // Local Storage stores the data for unlimited time, until the user decide to clear
    // Session Storage stores the data for the current session
    return this.http.post(this.url, credentials).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  get AuthenticatedUser() {
    // console.log('Auth service is been consumed ok');
    return this.currentUserSubject.value;
  }

  closeSession() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isUser() {
    return sessionStorage.getItem('currentUser')?.includes('ROLE_USER');
  }

  isAdmin() {
    return sessionStorage.getItem('currentUser')?.includes('ROLE_ADMIN');
  }
}
