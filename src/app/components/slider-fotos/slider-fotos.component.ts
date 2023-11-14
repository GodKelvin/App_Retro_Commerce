import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slider-fotos',
  templateUrl: './slider-fotos.component.html',
  styleUrls: ['./slider-fotos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderFotosComponent  implements OnInit {

  @Input() imagens: any = [];

  constructor() { }

  ngOnInit() {}

}
