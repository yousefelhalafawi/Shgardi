import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component {

  name!: string;
  age!: number;
  email!: string;
  address!: string;
  coverLetter!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const emailBody = `Name: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}\nAddress: ${this.address}\nCover Letter: ${this.coverLetter}`;
    // window.open(`mailto:yousefelhlfawi@gmail.com?subject=New Job Application&body=${encodeURIComponent(emailBody)}`);

    // Show success message
    Swal.fire({
      icon: 'success',
      title: 'Application Submitted!',
      text: 'Thank you for applying to our company. We will get back to you soon.'
    });

    // Clear form inputs
    this.name = '';
    this.age = 0;
    this.email = '';
    this.address = '';
    this.coverLetter = '';
  }
}
