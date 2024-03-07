import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../shared/components/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup;
  constructor(private alertservice:AlertService){
    this.loginForm=new FormGroup ({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  
  );
  }
  onSubmit(){
    if(!this.loginForm.valid){
      this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true})
    }

    console.log(this.loginForm.value)
  }
  success(){
    this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true,type:'success'})
  }

  danger(){
    this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true,type:'danger'})
  }

  warning(){
    this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true,type:'warning'})
  }

  primary(){
    this.alertservice.show({message:'Por favor,complete los campos requeridos',show:true,type:'primary'})
  }

}
