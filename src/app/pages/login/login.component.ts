import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem_login: string = '';
  errors: string = '';

  constructor( private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void { 
    localStorage.clear();
  }

  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required     
    ]),
    senha: new FormControl('',[
      Validators.required
    ])
  })

get form(): any{
  return this.formLogin.controls;
}

onSubmit(): void {
  this.httpClient.post(environment.API_URL + "api/Login", this.formLogin.value).subscribe(
    (data: any) =>{
      const token = (<any>data).token;
      localStorage.setItem("jwt", token);
      this.mensagem_login = data.mensagem;      
      this.router.navigate(['/consulta-profissional']);
      console.log(this.mensagem_login)
    },errors =>  this.errors = 'Usuario não Cadastrado, por favor realize o cadastro de usuário.');     
   
}

}
