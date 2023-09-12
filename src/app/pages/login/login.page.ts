import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';

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
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async login(){

    //Transformar o load num service?
    const loading = await this.loadingCtrl.create({
      message: "Carregando...",
      spinner: 'bubbles'
    });
    await loading.present();
    this.authService.login(this.dataLogin).subscribe({
        next: (value) => {
          console.log("Sucesso", value);
        },
        error: async (error) => {
          const toast = await this.toastCtrl.create({
            message: error.error.message,
            position: "top",
            duration: 5000,
            color: "danger"
          });
      
          toast.present();
        }
    })
    loading.dismiss();

    
  }

}
