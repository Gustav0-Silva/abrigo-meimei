import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GridAdocaoAnimaisComponent } from '../grid-adocao-animais/grid-adocao-animais.component';

@Component({
  selector: 'app-home',
  imports: [GridAdocaoAnimaisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  irParaPagina(pagina: string){
      this.router.navigate([`/${pagina}`]);
  }
}
