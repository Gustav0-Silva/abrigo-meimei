import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Animal {
  nome: string;
  cidade: string;
  estado: string;
  imagem: string;
  adotado: boolean;
  tipo: string;
  pelagem: string;
  porte: string;
  idade: string;
}

interface Filtros {
  tipo: string;
  pelagem: string;
  porte: string;
  idade: string;
}

@Component({
  selector: 'app-grid-adocao-animais',
  imports: [CommonModule, FormsModule],
  templateUrl: './grid-adocao-animais.component.html',
  styleUrl: './grid-adocao-animais.component.css'
})
export class GridAdocaoAnimaisComponent implements OnInit {
  animais: Animal[] = [
    {
      nome: 'Danika',
      cidade: 'Diadema',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/FIoUHs1.jpeg',
      adotado: false,
      tipo: 'Cachorro',
      pelagem: 'Caramelo',
      porte: 'Grande',
      idade: 'Até 1 ano'
    },
    {
      nome: 'Pretinho',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/OgfPaOl.jpeg',
      adotado: true,
      tipo: 'Gato',
      pelagem: 'Preto',
      porte: 'Pequeno',
      idade: 'Mais de 3 anos'
    },
    {
      nome: 'Max',
      cidade: 'Diadema',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/kEuETaa.jpeg',
      adotado: false,
      tipo: 'Gato',
      pelagem: 'Frajola',
      porte: 'Médio',
      idade: 'Mais de 3 anos'
    },
    {
      nome: 'Brancão',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/fx7OsJe.jpeg',
      adotado: true,
      tipo: 'Cachorro',
      pelagem: 'Branco',
      porte: 'Grande',
      idade: '1 ano á 3 anos'
    },
    {
      nome: 'Cinzinha',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/5PILwWd.jpeg',
      adotado: true,
      tipo: 'Gato',
      pelagem: 'Cinza',
      porte: 'Médio',
      idade: 'Mais de 3 anos'
    },
    {
      nome: 'Wandinha',
      cidade: 'Diadema',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/qu8ztvL.jpeg',
      adotado: false,
      tipo: 'Gato',
      pelagem: 'Siamês',
      porte: 'Pequeno',
      idade: '1 ano á 3 anos'
    },
    {
      nome: 'Branquinho',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      imagem: 'https://i.imgur.com/C589jDz.jpeg',
      adotado: true,
      tipo: 'Gato',
      pelagem: 'Branco',
      porte: 'Pequeno',
      idade: 'Até 1 ano'
    },
    {
      nome: 'Frajolinha',
      cidade: 'Rio de Janeiro',
      estado: 'Rio de Janeiro',
      imagem: 'https://i.imgur.com/f2MzN3a.jpeg',
      adotado: true,
      tipo: 'Gato',
      pelagem: 'Frajola',
      porte: 'Médio',
      idade: '1 ano á 3 anos'
    }
  ];

  animaisFiltrados: Animal[] = [];
  filtros: Filtros = {
    tipo: '',
    pelagem: '',
    porte: '',
    idade: ''
  };

  tiposAnimais: string[] = ['Cachorro', 'Gato'];
  pelagens: string[] = ['Siamês', 'Branco', 'Preto', 'Caramelo', 'Frajola', "Cinza"];
  portes: string[] = ['Pequeno', 'Médio', 'Grande'];
  idades: string[] = ['Até 1 ano', '1 ano á 3 anos', 'Mais de 3 anos'];

  constructor() { }

  ngOnInit(): void {
    this.animaisFiltrados = [...this.animais];
  }

  filtrarAnimais(): void {
    this.animaisFiltrados = this.animais.filter(animal => {
      return (
        (!this.filtros.tipo || animal.tipo === this.filtros.tipo) &&
        (!this.filtros.pelagem || animal.pelagem === this.filtros.pelagem) &&
        (!this.filtros.porte || animal.porte === this.filtros.porte) &&
        (!this.filtros.idade || animal.idade === this.filtros.idade)
      );
    });
  }

  limparFiltros(): void {
    this.filtros = {
      tipo: '',
      pelagem: '',
      porte: '',
      idade: ''
    };
    this.animaisFiltrados = [...this.animais];
  }

}
