import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntariado',
  imports: [],
  templateUrl: './voluntariado.component.html',
  styleUrl: './voluntariado.component.css'
})
export class VoluntariadoComponent {

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

  abrirFormulario(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdw8hrSQLxKiOWbXdXMsCepOPiFhZnegD68S4pi_YRwqwmHwQ/viewform', '_blank');
  }

}
