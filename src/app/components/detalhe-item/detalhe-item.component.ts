import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { CommonModule } from '@angular/common';
import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'detalhe-item',
  templateUrl: './detalhe-item.component.html',
  styleUrls: ['./detalhe-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})


export class DetalheItemComponent  implements OnInit {

  @Input() anuncio = {} as Anuncio;
  constructor() { }

  ngOnInit() {}

  formataData(data: string | undefined){  
    if(data){
      const date = new Date(data);
      const dia = String(date.getDate()).padStart(2, '0');
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const ano = date.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }

    return null;
    
  }

}
