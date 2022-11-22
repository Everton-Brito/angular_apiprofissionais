import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './pages/login/auth.interceptor';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroProfissionalComponent } from './pages/cadastro-profissional/cadastro-profissional.component';
import { EdicaoProfissionalComponent } from './pages/edicao-profissional/edicao-profissional.component';
import { ConsultaProfissionalComponent } from './pages/consulta-profissional/consulta-profissional.component';
import { AuthGuard } from './Guard/auth.guard';
import { IConfig, NgxMaskModule } from 'ngx-mask';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cadastro-profissional', component: CadastroProfissionalComponent, canActivate: [AuthGuard]},
  {path: 'edicao-profissional/:idProfissional', component: EdicaoProfissionalComponent, canActivate: [AuthGuard]},
  {path: 'consulta-profissional', component: ConsultaProfissionalComponent, canActivate: [AuthGuard]}
];

export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    MenuComponent,
    CadastroProfissionalComponent,
    EdicaoProfissionalComponent,
    ConsultaProfissionalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
