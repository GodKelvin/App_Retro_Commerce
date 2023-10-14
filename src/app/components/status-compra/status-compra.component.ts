import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'status-compra',
  templateUrl: './status-compra.component.html',
  styleUrls: ['./status-compra.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class StatusCompraComponent  implements OnInit {

  @Input() statusCompra: string = "";
  constructor() { }

  ngOnInit() {}

}
