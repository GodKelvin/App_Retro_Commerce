import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
//permitindo usar os slides para imagens
register();//https://ionicframework.com/docs/ja/v6/angular/slides
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
