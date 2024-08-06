import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.url);
  }
  addNewUser(user: any) {
    return this.http.post(this.url, user);
  }
}
