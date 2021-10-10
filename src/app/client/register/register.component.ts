import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../model/login-request";
import {Client} from "../model/client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm : FormGroup;
  registerForm : FormGroup;
  loginRequest : LoginRequest
  errorMessageLogin : string;
  errorMessageRegister : string;
  clientToSave : Client;
  constructor(private clientService : ClientService , private router : Router , private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }


  createLoginForm(){
    this.loginForm = this.fb.group(
      {
        email : ['',Validators.required],
        motDePasse : ['', Validators.required]
      }
    );
  }

  createRegisterForm(){
    this.registerForm = this.fb.group(
      {
        id : [0],
        nom : ['',Validators.required],
        prenom : ['',Validators.required],
        email: ['',Validators.required],
        motDePasse : ['',Validators.required]
      }
    )
  }


  login(){
    if(this.loginForm.valid){
      this.loginRequest = this.loginForm.getRawValue();
      this.clientService.login(this.loginRequest).subscribe(data=>{
        if(data.errorMessage){
          this.errorMessageLogin = data.errorMessage;
        }else{
          localStorage.clear();
          localStorage.setItem("userData",JSON.stringify(data));
          this.router.navigateByUrl('main/accueil');
          setTimeout(()=>{
            location.reload();
          }, 200);
        }

      });
    }else{
      this.errorMessageLogin = "Veuillez remplir tous les champs.";
    }
  }


  register(){
    if(this.registerForm.valid){
      this.clientToSave = this.registerForm.getRawValue();
      this.clientService.ajouterClient(this.clientToSave).subscribe((data)=>{
        localStorage.clear();
        localStorage.setItem("userData",JSON.stringify(data));
        this.router.navigateByUrl('main/accueil');
        setTimeout(()=>{
          location.reload();
        },200);
      });
    }else{
      this.errorMessageRegister = "Veuillez remplir tous les champs.";
    }
  }

}
