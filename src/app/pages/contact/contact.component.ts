import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    message : new FormControl('', [Validators.required, Validators.minLength(24)]),
  });
  
  submitForm(){

  }
}
