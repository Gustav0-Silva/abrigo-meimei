import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, MatIconModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  hoverState: string | null = null;
  activeCard: string | null = null;

  redesSociais = [
    {
      icone: 'https://cdn-icons-png.flaticon.com/512/5968/5968776.png',
      nome: 'Instagram',
      descricao: 'Siga-nos!',
      link: 'https://instagram.com/abrigomeimei/',
      textoLink: '@abrigomeimei'
    },
    {
      icone: 'https://img.freepik.com/vetores-premium/ilustracao-artistica_929495-41.jpg',
      nome: 'Facebook',
      descricao: 'Curta nossa página e participe da nossa comunidade.',
      link: 'https://facebook.com/abrigomeimei',
      textoLink: 'fb.com/abrigomeimei'
    },
    {
      icone: 'https://img.icons8.com/?size=512&id=16713&format=png',
      nome: 'WhatsApp',
      descricao: 'Fale Conosco!',
      link: 'https://wa.me/5511985816168',
      textoLink: 'Iniciar conversa'
    }
  ];

  hoverCard(rede: any): void {
    this.hoverState = rede.nome;
  }

  resetCard(): void {
    this.hoverState = null;
  }

  setActive(nome: string): void {
    this.activeCard = nome;
    setTimeout(() => {
      this.activeCard = null;
    }, 1000);
  }

  getIconBgColor(icone: string): string {
    const colors: {[key: string]: string} = {
      instagram: 'rgba(233, 89, 80, 0.1)',
      facebook: 'rgba(66, 103, 178, 0.1)',
      whatsapp: 'rgba(37, 211, 102, 0.1)'
    };
    return colors[icone] || 'rgba(130, 10, 209, 0.1)';
  }
}