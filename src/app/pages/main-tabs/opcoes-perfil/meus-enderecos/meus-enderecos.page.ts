import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.page.html',
  styleUrls: ['./meus-enderecos.page.scss'],
})
export class MeusEnderecosPage implements OnInit {
  enderecos: Endereco[] = [];
  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
    private loadinService: LoadingService,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    await this.getEnderecos();
  }

  novoEndereco(){
    this.router.navigate(["/novo-endereco"])
  }

  async getEnderecos(event?: any){
    this.enderecoService.getEnderecosUsuario().subscribe({
      next: (response) => {
        this.enderecos = response.message;
        console.log(this.enderecos);
      },
      error: async (error) => {
        this.toastService.showToastError("Erro ao buscar enderecos. Por favor, tente mais tarde.");
      }
    });
    if(event) event.target.complete();
  }

}
