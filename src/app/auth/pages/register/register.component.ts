import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(){
    this.registerForm=new FormGroup ({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      proffesion: new FormControl('',[Validators.required,Validators.minLength(4)]),
      cellphone: new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      //image: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  
  );
  }
  onSubmit(){
    console.log(this.registerForm.value)
  }
}
