import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nameWarning: boolean = false;
  nameValue: any;
  fName: any;

  passwordWarning: boolean = false;
  passwordValue: any;
  passwordType: string = 'password';

  checkValue: boolean = false;

  users: any;
  newUser: any;

  constructor(private usersService: UsersService, private nav: Router) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
    });
  }

  name(e: any) {
    this.fName = e.target.value;
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
      this.nameWarning = true;
    } else {
      this.nameWarning = false;
    }
  }

  passwordShow(e: any) {
    if (e.target.checked) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  register(e: any) {
    e.preventDefault();
    this.newUser = {
      id: this.users.length + 1,
      name: this.fName,
      user: this.nameValue,
      password: this.passwordValue,
    };
    this.usersService.addNewUser(this.newUser).subscribe();
    this.nav.navigate(['/products']);
  }
}
