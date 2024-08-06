import { Router } from '@angular/router';
import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  nameWarning: boolean = true;
  nameValue: any;
  passwordWarning: boolean = true;
  passwordValue: any;
  passwordType: string = 'password';
  checkValue: boolean = false;

  userData: any;

  userName: string = '';

  constructor(private usersService: UsersService, private nav: Router) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.userData = response;
      },
    });
  }

  user(e: any): void {
    this.nameValue = e.target.value;
    this.checkNameValue();
  }
  Pass(e: any): void {
    this.passwordValue = e.target.value;
    this.checkNameValue();
  }

  checkNameValue(): void {
    if (this.nameValue.trim() === '' || this.nameValue.trim().length < 3) {
      this.nameWarning = false;
    } else {
      this.nameWarning = true;
    }
  }
  Login(e: any) {
    e.preventDefault();
    let pass: string = '';
    for (let index = 0; index < this.userData.length; index++) {
      let element = this.userData[index];
      if (this.nameValue === element.user) {
        pass = element.password;
        console.log('USER IS TRUE');
        this.userName = element.name;
        break;
      } else {
        this.nameWarning = false;
      }
    }
    if (this.passwordValue.trim() === pass.trim()) {
      this.nameWarning = true;
      console.log('PASSWORD IS TRUE');
      console.log(this.userName);
      this.nav.navigate(['/products']);
    } else {
      this.passwordWarning = false;
    }
  }
  passwordShow(e: any) {
    if (e.target.checked) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
