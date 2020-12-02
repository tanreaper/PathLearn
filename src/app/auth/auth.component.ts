import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserData } from './auth.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoading: boolean = false;
  error: string = null;
  isRegistration = true;
  userData: UserData;
  firebaseService: Subscription;
  userInfoService: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.authService = null;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;
    const firstName = form.value.FirstName;
    const lastName = form.value.LstName;
    const userDetails = {
      email,
      password,
      phone,
      firstName,
      lastName,
    }
    this.firebaseService = this.authService.signup(email, password).subscribe(res => {
      console.log(res);
      this.formatUserInfo(res, userDetails);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.error = "An error occurred!"
      this.isLoading = false;
    });
    form.reset();
  }
  register() {
    this.isRegistration = true;
  }
  logIn() {
    this.isRegistration = false;
  }

  formatUserInfo(res: any, userDetails: any) {
    console.log (res['refreshToken']);
    this.userData = {
      idToken: res['idToken'],
      email: userDetails['email'],
      password: userDetails['password'],
      phone: userDetails['phone'],
      refreshToken: res['refreshToken'],
      expiresIn: res['expiresIn'],
      localId: res['localId'],
      firstName: userDetails['firstName'],
      lastName: userDetails ['lastName'],
      kind: res['kind']
    }
    this.userInfoService = this.authService.sendUserData(this.userData).subscribe(res => {
      console.log(res);
    })
    console.log(this.userData);
  }

  onLogIn(form: NgForm) {
    console.log(form)
    const email = form.value.email;
    console.log(email);
    this.router.navigate(['./Dashboard'])

  }

}
