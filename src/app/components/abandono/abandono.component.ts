import { Component } from '@angular/core';

@Component({
  selector: 'app-abandono',
  imports: [],
  templateUrl: './abandono.component.html',
  styleUrl: './abandono.component.css'
})
export class AbandonoComponent {

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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSejZg1RKVMU50ynMHZki1P466IJ53E9OL_JzxU_iK9lkfjYWw/viewform?usp=header', '_blank');
  }
}
