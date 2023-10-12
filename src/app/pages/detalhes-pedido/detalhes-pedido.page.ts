import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.page.html',
  styleUrls: ['./detalhes-pedido.page.scss'],
})
export class DetalhesPedidoPage implements OnInit {
  pedido: any = {};
  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.pedido = JSON.parse(params["pedido"]);
    });
  }

  ngOnInit() {
  }

}
