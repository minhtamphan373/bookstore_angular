import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router,
    private toast: NgToastService,
    private userSotre: UserStoreService,
    ){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]]
    });  
 
  }
  onsubmitForm(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next: (result) =>{
          console.log(result.message);
          this.loginForm.reset();
          this.auth.storeToken(result.token);
          alert(result.message);
          const tokenPayload = this.auth.decodeToken();
          this.userSotre.setNameForStore(tokenPayload.name);
          this.userSotre.setRoleForStore(tokenPayload.role);
          this.router.navigate(['pages/home']);
        },
        error: (err) =>{
        
          console.log(err.message);
          alert('Email hoặc Password không đúng')
        },
      });
    } 
    else{
      ValidateForm.validateAllFormFileds(this.loginForm);
    } 
  } 
}

