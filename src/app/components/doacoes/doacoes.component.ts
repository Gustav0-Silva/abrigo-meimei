import { Component } from '@angular/core';

@Component({
  selector: 'app-doacoes',
  imports: [],
  templateUrl: './doacoes.component.html',
  styleUrl: './doacoes.component.css'
})
export class DoacoesComponent {

  animarBtn(event: MouseEvent): void {
    const btn = event.target as HTMLElement;
    btn.style.backgroundColor = '#f8cbd2';
    btn.style.color = 'white';
  }

  resetarBtn(event: MouseEvent): void {
    const btn = event.target as HTMLElement;
    btn.style.backgroundColor = 'white';
    btn.style.color = '#444';
  }
}