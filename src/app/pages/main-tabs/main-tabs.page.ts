import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.page.html',
  styleUrls: ['./main-tabs.page.scss'],
})
export class MainTabsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  novoAnuncio(){
    this.router.navigate(["/novo-anuncio"])
  }

}
