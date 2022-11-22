import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-consulta-profissional',
  templateUrl: './consulta-profissional.component.html',
  styleUrls: ['./consulta-profissional.component.css']
})
export class ConsultaProfissionalComponent implements OnInit {


  profissionais: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {   


    this.httpClient.get(environment.API_URL + "api/Profissionais").subscribe(
      (data) => {
        this.profissionais = data as any[];
      }
    )
  }

  onDelete(idProfissional: string): void{
    if(window.confirm('Deseja realmente excluir o profissional da lista?')){
      this.httpClient.delete(environment.API_URL + "api/Profissionais/" + idProfissional).subscribe(
        (data: any) => {
          alert(data.mensagem);
          this.ngOnInit();
        }
      )
    }
  }

}
