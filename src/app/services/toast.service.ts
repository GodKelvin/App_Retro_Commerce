import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async showToastSuccess(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      position: "top",
      duration: 5000,
      color: "success"
    });
    toast.present();
  }

  async showToastError(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      position: "top",
      duration: 5000,
      color: "danger"
    });
    toast.present();
  }
}
