import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , FormControl,Validators,FormGroupDirective, AbstractControl} from '@angular/forms';
import { CustomValidators } from './custom-validator';
// import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  submitForm(){
    alert('Đăng ký thành công!');
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

