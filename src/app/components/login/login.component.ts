import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email !: string;
  password !: string;
  error !:string;
  constructor(private router: Router) {}

  onSubmit() {
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      this.error = 'Invalid email address';

      return;
    }

    // Password validation
    if (!this.password||this.password.length < 8) {
      this.error = 'Password must be at least 8 characters';

      return;
    }

    // If both email and password are valid, do something else (e.g. submit the form)
    console.log('Email/Username:', this.email,'Password:', this.password);
    this.router.navigate(['/home']);

  }

}
