import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  mensagem_cadastro: string = '';
  errors: string = '';  
  mostrarErro: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

formCadastro = new FormGroup({

  nome: new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(150)

  ]),
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  senha: new FormControl('',[
    Validators.required    
  ]),
  senhaConfirmacao: new FormControl('',[
    Validators.required
  ])
});

get form(): any{
  return this.formCadastro.controls;
}

onSubmit(): void{
  this.httpClient.post(environment.API_URL + "api/Usuarios", this.formCadastro.value).subscribe(
    (data: any) => {
      this.mensagem_cadastro = data.mensagem;
      this.formCadastro.reset();
    },errors =>  this.errors = 'Existe usuario cadastrado com esse email.'); 
  
}

}
