import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'


@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

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

    cpf: new FormControl('',[
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ]),

    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ])
  });

  get form(): any{
    return this.formCadastro.controls;
  }

  onSubmit(): void {
      this.httpClient.post(environment.API_URL + "api/Profissionais", this.formCadastro.value).subscribe(
        
        (data:any) => {
          this.mensagem_cadastro = data.mensagem;
          this.formCadastro.reset();
        },errors =>  this.errors = 'Existe profissional cadastrado com um desses dados: cpf, email ou telefone, por favor verifique.');  
      
  }
  }
  




