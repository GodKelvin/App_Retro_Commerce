import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async showLoading(){
    const loading = await this.loadingCtrl.create({
      message: "Carregando...",
      spinner: 'bubbles'
    });

    await loading.present();
  }

  hideLoading(){
    this.loadingCtrl.dismiss();
  }
}
