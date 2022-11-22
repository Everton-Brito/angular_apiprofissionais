import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edicao-profissional',
  templateUrl: './edicao-profissional.component.html',
  styleUrls: ['./edicao-profissional.component.css']
})
export class EdicaoProfissionalComponent implements OnInit {

  mensagem_cadastro: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {

    var idProfissional = this.activatedRoute.snapshot.paramMap.get('idProfissional') as string;

    this.httpClient.get(environment.API_URL + "api/Profissionais/" + idProfissional).subscribe(
      (data: any) => {
        this.formEdicao.patchValue(data);
      }
    );

  }

  formEdicao = new FormGroup({

    idProfissional: new FormControl(),

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

    telefone: new FormControl('',[
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ])
})

get form(): any{
  return this.formEdicao.controls;
}

onSubmit(): void{
  this.httpClient.put(environment.API_URL + "api/Profissionais", this.formEdicao.value).subscribe(
    (data: any) => {
      this.mensagem_cadastro = data.mensagem;
    }
  )
}

}
