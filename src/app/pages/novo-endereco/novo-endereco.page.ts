import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo-endereco.page.html',
  styleUrls: ['./novo-endereco.page.scss'],
})
export class NovoEnderecoPage implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private enderecoService: EnderecoService,
    private router: Router
  ) { 
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  async criarEndereco(){
    if(!this.form.valid) return;
    const dadosForm = this.form.value as Endereco;
    await this.loadingService.showLoading();
    this.enderecoService.novoEndereco(dadosForm).subscribe({
      next: (_response) => {
        this.router.navigate(["/main-tabs/opcoes-perfil/meus-enderecos"]);
      },
      error: async (error) => {
        await this.toastService.showToastError("Erro ao criar endereço. Por favor, tente mais tarde.")
      }
    });
    this.loadingService.hideLoading();
  }

  private createForm(): FormGroup{
    let form = this.formBuilder.group({
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      bairro: [null, Validators.required],
      rua: [null, Validators.required],
      numero: [null, Validators.required],
      cep: [null, Validators.required],
      pontoReferencia: [null, Validators.required]
    });

    return form;
  }

}
