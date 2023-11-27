import { Component, OnInit } from '@angular/core';
import { Pet } from '../core/models/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  petsList: Array<Pet> = new Array();
  pet: Pet = {
    id: 1,
    name: 'Caramela',
    age: '1 ano',
    photo: 'url',
    contact: 'contato',
  };
  constructor() {}

  ngOnInit(): void {
    this.petsList.push(
      {
        id: 1,
        name: 'Bandido',
        age: '6 meses',
        photo: 'assets/bandido.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 2,
        name: 'Canelinha',
        age: '1 ano',
        photo: 'assets/canelinha.jpg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 3,
        name: 'Caramela',
        age: '1 ano',
        photo: 'assets/caramela.jpeg',
        contact: 'quatropatas@gmail.com',
      },
      {
        id: 4,
        name: 'Cenoura',
        age: '2 anos',
        photo: 'assets/cenoura.jpeg',
        contact: 'resgate@gmail.com',
      },
      {
        id: 5,
        name: 'Filhotes para adoção',
        age: '45 dias',
        photo: 'assets/filhotes.jpeg',
        contact: 'ana@hotmail.com',
      },
      {
        id: 6,
        name: 'Gatinho',
        age: '1 ano',
        photo: 'assets/gatinho.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 7,
        name: 'Gato Antônio',
        age: '5 anos',
        photo: 'assets/gato-antonio.jpg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 8,
        name: 'Iná',
        age: '8 meses',
        photo: 'assets/ina.jpeg',
        contact: 'quatropatas@gmail.com.',
      },
      {
        id: 9,
        name: 'Irmãos para adoção',
        age: '4 meses',
        photo: 'assets/irmaos.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 10,
        name: 'Larus',
        age: '3 anos',
        photo: 'assets/larus.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 11,
        name: 'Ninhadinha para adoção',
        age: '60 dias',
        photo: 'assets/ninhadinha.jpeg',
        contact: 'renan@live.com',
      },
      {
        id: 12,
        name: 'Noite',
        age: '4 anos',
        photo: 'assets/noite.jpeg',
        contact: 'marquinho@outlook.com',
      },
      {
        id: 13,
        name: 'Paçoca',
        age: '1 ano',
        photo: 'assets/pacoca.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 14,
        name: 'Panqueca',
        age: '60 dias',
        photo: 'assets/panqueca.jpeg',
        contact: 'adocao@miaudote.com.br',
      },
      {
        id: 15,
        name: 'Princeso',
        age: '2 anos',
        photo: 'assets/princeso.jpeg',
        contact: 'adocao@miaudote.com.br',
      }
    );
  }
}
