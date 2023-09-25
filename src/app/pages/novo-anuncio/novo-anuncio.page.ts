import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { EstadoConservacao } from 'src/app/interfaces/estado-conservacao';
import { Jogo } from 'src/app/interfaces/jogo';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { EstadosConservacaoService } from 'src/app/services/estados-conservacao';
import { JogoService } from 'src/app/services/jogo.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-novo-anuncio',
  templateUrl: './novo-anuncio.page.html',
  styleUrls: ['./novo-anuncio.page.scss'],
})
export class NovoAnuncioPage implements OnInit {
  form: FormGroup;
  jogos: Jogo[] = [];
  searchTerm: string = '';
  filteredJogos: Jogo[] = [];
  estadosConservacao: EstadoConservacao[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private route: Router,
    private jogoService: JogoService,
    private estadoConservacaoService: EstadosConservacaoService
  ) { 
    this.form = this.createForm()
  }

  ngOnInit() {
    this.getJogo();
    this.getEstadosConservacao();
  }

  private createForm(): FormGroup{
    let form = this.formBuilder.group({
      produto: [null, [Validators.required]],
      produtoId: [null, Validators.required],
      preco: [null, Validators.required],
      estadoConservacaoId: [null, Validators.required],
      descricao: [""],
      caixa: [false],
      manual: [false],
      publico: [true],
      photos: [[]]
    });

    return form;
  }

  async getJogo(){
    this.jogoService.getJogo({plataforma: "genesis"}).subscribe({
      next: (response) => {
        this.jogos = [];
        this.jogos = response.message;
        this.filteredJogos = response.message;
      },
      error: (error) => {
        this.toastService.showToastError("Erro ao obter jogos.");
      }
    });
  }

  private async getEstadosConservacao(){
    this.estadoConservacaoService.getEstadosConservacao().subscribe({
      next: (response) => {
        this.estadosConservacao = response.message;
      },
      error: (error) => {
        this.toastService.showToastError("Erro ao obter estados de conservação.");
      }
    });
  }

  async criarAnuncio(){
    if(!this.form.valid) return;
    const dadosForm = this.form.value as Anuncio;
    //Nao preciso dessa informacao na API
    delete dadosForm.produto;
    await this.loadingService.showLoading();

  }

  filterJogos() {
    const produtoValue = this.form.get('produto')?.value;
    this.searchTerm = produtoValue;
    // Filtrar a lista de jogos com base no termo de pesquisa
    this.filteredJogos = this.jogos.filter(item =>
      item.nome.toLowerCase().includes(produtoValue.toLowerCase())
    );
  }

  selectGame(game: any) {
    this.filteredJogos = [];
    this.form.get("produto")?.setValue(game.nome);
    this.form.get("produtoId")?.setValue(game.id);
    this.searchTerm  = "";
  }

}
