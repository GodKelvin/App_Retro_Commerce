import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataLogin: Login =  {
    email: "",
    senha: ""
  }
  constructor(
    private loadingService: LoadingService,
    private toastService: ToastService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async login(){
    await this.loadingService.showLoading();
    this.authService.login(this.dataLogin).subscribe({
        next: (value) => {
          console.log("Sucesso", value);
        },
        error: async (error) => {
          await this.toastService.showToastError(error.error.message)
        }
    })
    this.loadingService.hideLoading();

    
  }

}
