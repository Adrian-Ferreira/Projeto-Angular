import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { NavibarConteudoComponent } from '../app/navibar-conteudo/navibar-conteudo.component';






const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'conteudo', component: NavibarConteudoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
