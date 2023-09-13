import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuario } from 'src/app/interfaces/cadastro-usuario';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private route: Router
  ) {
    this.form = this.createForm()
  }

  ngOnInit() {
  }

  async criarUsuario(){
    if(!this.form.valid) return;
    const dadosForm = this.form.value as CadastroUsuario;
    await this.loadingService.showLoading();
    this.usuarioService.novoUsuario(dadosForm).subscribe({
      next: (response) => {
        this.toastService.showToastSuccess("Um link de confirmação foi enviado para o seu email!");
        this.route.navigate(["/login"]);
      },
      error: async (error) => {
        await this.toastService.showToastError(error.error.message)
      }
    });
    this.loadingService.hideLoading();
  }

  private createForm(): FormGroup{
    let form = this.formBuilder.group({
      nome: [null, [Validators.required, this.onlyLetters()]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [null, Validators.required],
      apelido: [null, [Validators.required, this.onlyLettersNumbers()]],
      dataNascimento: [null, Validators.required, this.idadeMinima()]
    });

    //Validando se as senhas sao iguais
    form.get("confirmarSenha")?.setValidators(this.matchPassword(form));

    return form;
  }

  private onlyLetters(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const pattern = /^[ a-zA-Z]*$/;
      if(value && !pattern.test(value)){
        return { alphaNumeric: true };
      }
      return null;
    }
  }

  private onlyLettersNumbers(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const pattern = /^[a-zA-Z0-9]*$/;
      if(value && !pattern.test(value)){
        return { alphaNumeric: true };
      }
      return null;
    }
  }

  private matchPassword(form: FormGroup): ValidatorFn{
    const senha = form.get("senha");
    const confirmarSenha = form.get("confirmarSenha");
    const validator = () => {
      return senha?.value == confirmarSenha?.value ? null : {senhasNaoConferem: true}
    }
    return validator;
  }

  private idadeMinima(): ValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      const dataNascimento = new Date(control.value);
      const hoje = new Date();
      const idade = hoje.getFullYear() - dataNascimento.getFullYear();
      if(idade < 18) return {idadeMinima: true};
      return null;
    }
  }
}
