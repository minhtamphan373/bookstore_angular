import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]), 
    password : new FormControl('', [Validators.required, Validators.minLength(6)]), 
  });  
  submitForm(){
    // if(this.)
    alert('Lời nhắn gửi thành công!')    
  }

  
}
