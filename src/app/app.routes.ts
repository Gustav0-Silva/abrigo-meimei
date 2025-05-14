import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AbandonoComponent } from './components/abandono/abandono.component';
import { ContatoComponent } from './components/contato/contato.component';
import { DisponiveisComponent } from './components/disponiveis/disponiveis.component';
import { DoacoesComponent } from './components/doacoes/doacoes.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { VoluntariadoComponent } from './components/voluntariado/voluntariado.component';
import { GridAdocaoAnimaisComponent } from './components/grid-adocao-animais/grid-adocao-animais.component';
import { LayoutComponent } from './components/layout/layout.component'; // novo componente de layout

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'abandono', component: AbandonoComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'disponiveis', component: DisponiveisComponent },
      { path: 'doacoes', component: DoacoesComponent },
      { path: 'sobreNos', component: SobreNosComponent },
      { path: 'voluntariado', component: VoluntariadoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

