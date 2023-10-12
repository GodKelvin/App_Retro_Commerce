import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumoCompra } from 'src/app/interfaces/resumo-compra';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.page.html',
  styleUrls: ['./detalhes-pedido.page.scss'],
})
export class DetalhesPedidoPage implements OnInit {
  pedido = {} as ResumoCompra;
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
