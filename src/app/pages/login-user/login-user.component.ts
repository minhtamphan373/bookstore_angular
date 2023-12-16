/*import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


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

  constructor(
    private fb:FormBuilder, 
    private auth: AuthService, 
    private router: Router
    ){}

  submitForm(){   
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(result)=>{
          alert(result.message);
          this.router.navigate(['library'])
        },
        error:(err) =>{
          alert(err?.error.message)
        }
      })
    }
    else{
      console.log("Form is not valid");
      this.validateAllFormFileds(this.loginForm);
      alert("Your form is invalid")
    }
  }

  private validateAllFormFileds(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
    })
  }
}*/


//copy lai tu github
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
          this.toast.success({detail:"SUCCESS", summary:result.message, duration: 5000})
          this.router.navigate(['pages/home']);
        },
        error: (err) =>{
          this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);
        },
      });
    } 
    else{
      ValidateForm.validateAllFormFileds(this.loginForm);
    } 
  } 
}


/*import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import ValidateForm from 'src/app/helpers/validateform';


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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}


  onsubmitForm(){
    if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //send the obj to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.mesage)
        },
        error: (err => {
            alert(err?.error.message)
        })
    })
    console.log(this.loginForm.value)
    }  
    else{
      console.log("Form is not valid")
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFileds(this.loginForm);
      alert("Your form is invalid")
    }    
  }
}*/