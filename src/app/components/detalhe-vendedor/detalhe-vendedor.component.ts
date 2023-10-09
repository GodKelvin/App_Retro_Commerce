import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'detalhe-vendedor',
  templateUrl: './detalhe-vendedor.component.html',
  styleUrls: ['./detalhe-vendedor.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetalheVendedorComponent  implements OnInit {

  @Input() anunciante = {}  as Usuario;
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
