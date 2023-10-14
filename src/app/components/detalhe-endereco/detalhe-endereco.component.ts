import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Endereco } from 'src/app/interfaces/endereco';
@Component({
  selector: 'detalhe-endereco',
  templateUrl: './detalhe-endereco.component.html',
  styleUrls: ['./detalhe-endereco.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DetalheEnderecoComponent  implements OnInit {

  @Input() endereco = {} as Endereco
  constructor() { }

  ngOnInit() {}

}
