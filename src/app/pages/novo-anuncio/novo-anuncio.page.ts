import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/interfaces/jogo';
import { AnuncioService } from 'src/app/services/anuncio.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private anuncioService: AnuncioService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private route: Router,
    private jogoService: JogoService
  ) { 
    this.form = this.createForm()
  }

  ngOnInit() {
    this.getJogo();
  }

  private createForm(): FormGroup{
    let form = this.formBuilder.group({
      produto: [null, [Validators.required]],
      jogoId: [null, Validators.required],
      preco: [null, Validators.required],
      condicao: [null, Validators.required],
      descricao: [""],
      caixa: [false],
      manual: [false],
      publico: [false]
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
        console.log(error)
      }
    });
  }

  async criarAnuncio(){
    
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
