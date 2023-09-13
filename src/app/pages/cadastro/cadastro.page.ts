import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm()
  }

  ngOnInit() {
  }

  criarUsuario(){
    console.log(this.form.value)
  }

  private createForm(): FormGroup{
    let form = this.formBuilder.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ["", Validators.required],
      apelido: ["", Validators.required],
      dataNascimento: [new Date(), Validators.required, this.idadeMinima()]
    });

    //Validando se as senhas sao iguais
    form.get("confirmarSenha")?.setValidators(this.matchPassword(form));

    return form;
  }

  private matchPassword(form: FormGroup): ValidatorFn{
    const senha = form.get("senha");
    const confirmarSenha = form.get("confirmarSenha");
    const validator = () => {
      return senha?.value == confirmarSenha?.value ? null : {senhasNaoConferem: true}
    }
    return validator;
  }

  private idadeMinima(): AsyncValidatorFn{
    return async (control: AbstractControl): Promise<any> => {
      const dataNascimento = new Date(control.value);
      const hoje = new Date();
      const idade = hoje.getFullYear() - dataNascimento.getFullYear();
      if(idade < 18) return {idadeMinima: true};
      return null;
    }
  }
}
