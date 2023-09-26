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
  imagens: File[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private router: Router,
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
      jogoId: [null, Validators.required],
      preco: [null, Validators.required],
      estadoConservacaoId: [null, Validators.required],
      descricao: [""],
      caixa: [false],
      manual: [false],
      publico: [true]
    });

    return form;
  }

  async getJogo(){
    //@TODO: Por enquanto só está buscando os jogos do mega drive
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
      error: async (error) => {
        await this.toastService.showToastError("Erro ao obter estados de conservação.");
      }
    });
  }

  async criarAnuncio(){
    if(!this.form.valid) return;
    const dadosForm = await this.convertForm();
    await this.loadingService.showLoading();
    this.anuncioService.criarAnuncio(dadosForm).subscribe({
      next:(response) => {
        this.router.navigate(["/main-tabs/meus-anuncios"]);
      },
      error: async (error) => {
        console.log(error);
        await this.toastService.showToastError("Erro ao criar anúncio. Por favor, tente mais tarde.");
      }
    });
    this.loadingService.hideLoading();
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
    this.form.get("jogoId")?.setValue(game.id);
    this.searchTerm  = "";
  }

  getImagens(event: any){
    const files = event.target.files;
    for(const file of files){
      this.imagens.push(file);
    }
  }

  private async convertForm(){
    const formData = new FormData();
    formData.append('jogoId', this.form.get('jogoId')?.value);
    formData.append('preco', this.form.get('preco')?.value);
    formData.append('estadoConservacaoId', this.form.get('estadoConservacaoId')?.value);
    formData.append('descricao', this.form.get('descricao')?.value);
    formData.append('caixa', this.form.get('caixa')?.value);
    formData.append('manual', this.form.get('manual')?.value);
    formData.append('publico', this.form.get('publico')?.value);

    const photos = this.imagens
    for(const photo of photos){
      formData.append("photos", photo);
    }

    return formData;
  }

}
