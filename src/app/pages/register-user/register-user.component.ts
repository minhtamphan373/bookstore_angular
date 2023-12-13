/*import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , FormControl,Validators,FormGroupDirective, AbstractControl} from '@angular/forms';
import { CustomValidators } from './custom-validator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService,
    private router: Router){ }

  submitForm(){
    if(this.registerForm.valid){
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(result)=>{
          alert(result.message);
          this.registerForm.reset();
          this.router.navigate(['login-user']); 
        },
        error:(err) =>{
          alert(err?.error.message)
        }
      })
    }
    else{
      console.log("Form is not valid");
      this.passwordMatchValidator(this.registerForm);
      alert("Your form is invalid")
    }
  }



  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]), 
    password : new FormControl('', [Validators.required, Validators.minLength(6)]), 
    cpassword : new FormControl('', [Validators.required, Validators.minLength(6)])  
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     pw: this.fb.group({
  //       password: ['', Validators.required],
  //       confirmPassword: ['', Validators.required]
  //     },{Validator: comparePassword})
  //   });
  // } 
  
  // ngOnInit(){
  //   this.registerForm = this.formBuilder.group(
  //     {
  //       // password: ['', Validators.required],
  //       // confirmPassword: ['', Validators.required]
  //     },
  //     { validator: this.passwordMatchValidator }
  //   );
  // }  
  
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordnotmatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }





}
// export function comparePassword(c: AbstractControl) {
//   const v = c.value;
//     return (v.password === v.confirmPassword) ? null : {
//       passwordnotmatch: true
//     };
// }

*/




//Copy lai tu github
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , FormControl,Validators,FormGroupDirective, AbstractControl} from '@angular/forms';
import { CustomValidators } from './custom-validator';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import ValidateForm from 'src/app/helpers/validateform';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){ }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
      cpassword: ['', [Validators.required, Validators.minLength(6)]]  
    },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { 
      validators: CustomValidators.passwordsMatching 
    })
  }


  submitForm(){
    if(this.registerForm.valid){
      //perform login for register
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(result) =>{
          alert(result.message);
          this.registerForm.reset();
          this.router.navigate(['login-user']);
        },
        error:(err) =>{
          alert(err?.error.message)
        }
      })
    }
    else{
      ValidateForm.validateAllFormFileds(this.registerForm)
      //logic for throwing error
    }
  }
  
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordnotmatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

}
// export function comparePassword(c: AbstractControl) {
//   const v = c.value;
//     return (v.password === v.confirmPassword) ? null : {
//       passwordnotmatch: true
//     };
// }*/




import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , FormControl,Validators,FormGroupDirective, AbstractControl} from '@angular/forms';
import { CustomValidators } from './custom-validator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){ }
  submitForm(){
    if(this.registerForm.valid){
      //perform login for register
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(result) =>{
          alert(result.message);
          this.registerForm.reset();
          this.router.navigate(['/pages/login-user']);
        },
        error:(err) =>{
          alert(err?.error.message)
        }
      })
    }
    else{
      ValidateForm.validateAllFormFileds(this.registerForm)
      //logic for throwing error
    }
  }
  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]), 
    password : new FormControl('', [Validators.required, Validators.minLength(6)]), 
    cpassword : new FormControl('', [Validators.required, Validators.minLength(6)])  
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     pw: this.fb.group({
  //       password: ['', Validators.required],
  //       confirmPassword: ['', Validators.required]
  //     },{Validator: comparePassword})
  //   });
  // } 
  
  // ngOnInit(){
  //   this.registerForm = this.formBuilder.group(
  //     {
  //       // password: ['', Validators.required],
  //       // confirmPassword: ['', Validators.required]
  //     },
  //     { validator: this.passwordMatchValidator }
  //   );
  // }  
  
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordnotmatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }





}
// export function comparePassword(c: AbstractControl) {
//   const v = c.value;
//     return (v.password === v.confirmPassword) ? null : {
//       passwordnotmatch: true
//     };
// }