import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'codigo-rastreio',
  templateUrl: './codigo-rastreio.component.html',
  styleUrls: ['./codigo-rastreio.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CodigoRastreioComponent  implements OnInit {

  @Input() rastreio: string = "";
  constructor() { }

  ngOnInit() {}

}
